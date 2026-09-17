import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import './firebase.ts';
import App from './App.tsx';
import './index.css';

// Register PWA service worker in production with auto-update
if (import.meta.env.PROD && typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  registerSW({
    immediate: true,
    onNeedRefresh() {
      console.log('New Clarity Creative PWA content available; reloading.');
    },
    onOfflineReady() {
      console.log('Clarity Creative PWA is ready to work offline.');
    },
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
