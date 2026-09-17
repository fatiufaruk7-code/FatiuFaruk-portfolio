import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus.ts';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div 
      role="status"
      aria-live="polite"
      id="offline-indicator"
      className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1C1F]/95 text-[#F4FFFF] font-bold text-[11px] sm:text-xs shadow-xl shadow-black/80 backdrop-blur-md border border-[#16C7C2] max-w-[calc(100vw-24px)] animate-in fade-in slide-in-from-top-3 duration-300"
    >
      <WifiOff className="w-3.5 h-3.5 flex-shrink-0 text-[#16C7C2]" />
      <span className="truncate">Offline Mode — Cached Clarity Creative active</span>
    </div>
  );
};
