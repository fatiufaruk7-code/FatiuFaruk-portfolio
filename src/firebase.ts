import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

// Firebase configuration with environment variable support and fallbacks
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyB59nUuHvizd55k6sb7zM2vIh_EkinwQAY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "clarity-portfolio-945e2.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "clarity-portfolio-945e2",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "clarity-portfolio-945e2.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "685263855398",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:685263855398:web:bf1c52f9d658033325ebe7",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-D0R9NTLQT4"
};

// Initialize Firebase App (prevents duplicate initialization in HMR or re-renders)
export const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Analytics initialization that never crashes the app in unsupported environments (iframes, SSR, ad-blockers)
let analytics: Analytics | null = null;

if (typeof window !== "undefined") {
  isSupported()
    .then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    })
    .catch((err) => {
      // Graceful fallback - analytics absence will not break the website
      console.warn("Firebase Analytics is not supported or was blocked in this environment:", err);
    });
}

export { analytics };
