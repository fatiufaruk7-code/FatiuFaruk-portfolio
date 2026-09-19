import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  serverTimestamp,
  type Firestore,
  type DocumentReference,
  type DocumentData
} from "firebase/firestore";

/**
 * Firebase Client Configuration
 * Sourced strictly from Vite environment variables (VITE_FIREBASE_*)
 * No credentials are hardcoded into the source code.
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase modular app singleton
const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore service instance
const db: Firestore = getFirestore(app);

export { app, db, firebaseConfig };

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
  const trimmedName = payload.name?.trim() || "";
  const trimmedEmail = payload.email?.trim() || "";
  const trimmedMessage = payload.message?.trim() || "";
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

  if (!db) {
    throw new Error("Firebase Firestore is not initialized. Please verify your VITE_FIREBASE_* environment variables.");
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

