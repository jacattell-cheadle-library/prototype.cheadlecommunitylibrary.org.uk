import { useEffect } from 'react';
import { X } from 'lucide-react';
import { LIBRARY_CONTACT, PRINTING_RATES } from '../data/libraryInfo';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InfoModal({ isOpen, onClose }: InfoModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1B2024]/55 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="printing-guide-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#FAF9F6] border border-[#D8D4C9] rounded-xl shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-[#E4E2DC] bg-white">
          <div>
            <p className="text-sm font-medium text-[#1B4D3E]">Service Guide</p>
            <h3
              id="printing-guide-title"
              className="font-serif text-2xl font-semibold text-[#1B2024] mt-1"
            >
              Computers, Printing & Scanning
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close printing and computer guide"
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg border border-[#D8D4C9] bg-[#FAF9F6] text-[#1B2024] hover:bg-[#EFECE4] transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          <p className="text-base leading-relaxed text-[#373D43]">
            Everyone can enjoy free high-speed internet via <strong>GovWifi</strong>, and library
            members have free access to <strong>8 bookable computers across 2 floors</strong> with
            LibreOffice Suite. Our volunteers are always happy to help you get started.
          </p>

          <div className="overflow-x-auto border border-[#E4E2DC] rounded-lg bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E4E2DC] bg-[#F3F2EE] text-sm font-semibold text-[#1B2024]">
                  <th className="py-3 px-4">Service</th>
                  <th className="py-3 px-4">Size</th>
                  <th className="py-3 px-4">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E2DC] text-base">
                {PRINTING_RATES.map((rate) => (
                  <tr key={rate.item}>
                    <td className="py-3.5 px-4 align-top">
                      <div className="font-semibold text-[#1B2024]">{rate.item}</div>
                      <div className="text-sm text-[#525860] mt-1">{rate.notes}</div>
                    </td>
                    <td className="py-3.5 px-4 align-top text-sm text-[#373D43] whitespace-nowrap">
                      {rate.size}
                    </td>
                    <td className="py-3.5 px-4 align-top font-semibold text-[#1B4D3E] tabular-nums whitespace-nowrap">
                      {rate.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#EDF4F1] border border-[#C9DDD4] rounded-lg p-4 text-base text-[#1B2024]">
            <p className="font-semibold text-[#1B4D3E]">Printing from USB-A & Upstairs Scanning</p>
            <p className="mt-1 text-sm leading-relaxed text-[#373D43]">
              You can print via one of the library computers or by plugging a{' '}
              <strong>USB-A memory stick</strong> directly into our HP Colour LaserJet Managed MFP
              E786 printer/photocopier (USB sticks are also available to buy at the desk). Our
              Canon CanoScan LiDE 300 A4 scanner is on computer number 7 upstairs—call{' '}
              <a href={LIBRARY_CONTACT.phoneHref} className="font-semibold underline text-[#1B4D3E]">
                {LIBRARY_CONTACT.phone}
              </a>{' '}
              if you would like help or access details.
            </p>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-[#E4E2DC] bg-white flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] px-5 py-2.5 rounded-lg bg-[#1B4D3E] text-white text-base font-medium hover:bg-[#143B2F] transition-colors whitespace-nowrap shrink-0"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
