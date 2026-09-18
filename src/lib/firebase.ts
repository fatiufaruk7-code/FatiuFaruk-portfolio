import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { 
  getFirestore, 
  Firestore, 
  collection, 
  addDoc, 
  serverTimestamp,
  type DocumentReference,
  type DocumentData
} from "firebase/firestore";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

/**
 * Firebase Client Configuration
 * Strictly sourced from Vite environment variables (VITE_FIREBASE_*)
 * No credentials are hardcoded into the source code.
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || ""
};

/**
 * Checks if mandatory Firebase environment variables are populated
 */
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && 
  firebaseConfig.projectId
);

// Prevent duplicate initialization during HMR / re-renders
let app: FirebaseApp | null = null;
let db: Firestore | null = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
  } catch (error) {
    console.error("Failed to initialize Firebase App:", error);
  }
} else {
  console.warn(
    "Firebase environment variables are missing or incomplete. " +
    "Please ensure VITE_FIREBASE_API_KEY and VITE_FIREBASE_PROJECT_ID are set."
  );
}

export { app, db, firebaseConfig };

// Safe Analytics initialization for client-side environments (resilient against adblockers/iframes)
let analytics: Analytics | null = null;
if (typeof window !== "undefined" && app && firebaseConfig.measurementId) {
  isSupported()
    .then((supported) => {
      if (supported && app) {
        analytics = getAnalytics(app);
      }
    })
    .catch((err) => {
      console.warn("Firebase Analytics is not supported in this environment:", err);
    });
}
export { analytics };

export interface ContactMessagePayload {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

/**
 * Saves a visitor contact inquiry directly to the Firestore collection 'contactMessages'
 */
export async function saveContactMessage(payload: ContactMessagePayload): Promise<DocumentReference<DocumentData, DocumentData>> {
  if (!db) {
    throw new Error(
      "Firebase Firestore is not initialized. Please verify your VITE_FIREBASE_* environment variables."
    );
  }

  const trimmedName = payload.name.trim();
  const trimmedEmail = payload.email.trim();
  const trimmedMessage = payload.message.trim();
  const projectType = (payload.projectType || "Business Website").trim();

  // Validate inputs
  if (!trimmedName) {
    throw new Error("Please enter your name.");
  }
  if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    throw new Error("Please enter a valid email address.");
  }
  if (!trimmedMessage) {
    throw new Error("Please enter your project details or requirements.");
  }

  const messagesRef = collection(db, "contactMessages");
  const docRef = await addDoc(messagesRef, {
    name: trimmedName,
    email: trimmedEmail,
    projectType: projectType,
    message: trimmedMessage,
    createdAt: serverTimestamp()
  });

  return docRef;
}
