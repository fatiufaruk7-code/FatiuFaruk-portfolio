import React, { useState } from 'react';
import { Download, Check, Smartphone, Share2, PlusSquare, Monitor, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall.ts';

interface PWAInstallButtonProps {
  variant?: 'nav' | 'mobile';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ variant = 'nav' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);
  const [installedNotice, setInstalledNotice] = useState(false);

  // If already running inside standalone PWA, hide the button
  if (isInstalled) {
    return null;
  }

  const handleClick = async () => {
    if (isInstallable) {
      const outcome = await install();
      if (outcome) {
        setInstalledNotice(true);
        setTimeout(() => setInstalledNotice(false), 2500);
      }
    } else {
      setShowGuide(true);
    }
  };

  return (
    <>
      <button
        type="button"
        id={variant === 'nav' ? 'nav-install-btn' : 'mobile-install-btn'}
        onClick={handleClick}
        className={
          variant === 'nav'
            ? 'hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#62E7E1] hover:text-[#061012] bg-[#16C7C2]/15 hover:bg-[#16C7C2] border border-[#16C7C2]/30 transition-all cursor-pointer'
            : 'inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#061012] bg-[#16C7C2] hover:bg-[#62E7E1] border border-[#16C7C2]/40 transition-all cursor-pointer shadow-md shadow-[#16C7C2]/25'
        }
        title="Install Clarity Creative Progressive Web App"
      >
        {installedNotice ? (
          <>
            <Check className="w-3.5 h-3.5 text-[#16C7C2]" />
            <span className="text-[#62E7E1]">Installed</span>
          </>
        ) : (
          <>
            <Download className="w-3.5 h-3.5" />
            <span>Install App</span>
          </>
        )}
      </button>

      {/* Guide dialog for browsers without automatic prompt */}
      {showGuide && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-sm rounded-2xl bg-[#0D1C1F] border border-[#193438] p-5 text-[#F4FFFF] space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#193438]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#16C7C2]/20 flex items-center justify-center text-[#62E7E1]">
                  {isIOS ? <Smartphone className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
                </div>
                <div>
                  <h4 className="text-sm font-bold">Install Clarity Creative</h4>
                  <p className="text-[11px] text-[#8FA5A5]">Add to your device home screen</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowGuide(false)}
                className="p-1 text-[#8FA5A5] hover:text-[#F4FFFF]"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {isIOS ? (
              <div className="space-y-2.5 text-xs text-[#8FA5A5]">
                <p>To install on iPhone or iPad:</p>
                <div className="p-2.5 rounded-lg bg-[#0A1719] border border-[#193438] flex items-start gap-2.5">
                  <Share2 className="w-4 h-4 text-[#16C7C2] flex-shrink-0 mt-0.5" />
                  <span>Tap <strong>Share</strong> in the bottom Safari navigation bar.</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0A1719] border border-[#193438] flex items-start gap-2.5">
                  <PlusSquare className="w-4 h-4 text-[#16C7C2] flex-shrink-0 mt-0.5" />
                  <span>Choose <strong>Add to Home Screen</strong> from the list.</span>
                </div>
              </div>
            ) : (
              <div className="space-y-2.5 text-xs text-[#8FA5A5]">
                <p>In Chrome or Edge:</p>
                <div className="p-2.5 rounded-lg bg-[#0A1719] border border-[#193438] flex items-start gap-2.5">
                  <Download className="w-4 h-4 text-[#16C7C2] flex-shrink-0 mt-0.5" />
                  <span>Click the <strong>Install</strong> icon in the address bar, or open the menu (⋮) and select <strong>Install Clarity Creative</strong>.</span>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowGuide(false)}
              className="w-full py-2 text-xs font-bold rounded-lg bg-[#16C7C2] hover:bg-[#62E7E1] text-[#061012] transition-colors cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};
