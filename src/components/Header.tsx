import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services & Activities', href: '#services' },
  { label: 'Events Calendar', href: '#events' },
  { label: 'E-Library', href: '#e-library' },
  { label: 'Visit & Contact', href: '#visit' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#E4E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-[#1B2024] whitespace-nowrap shrink-0"
        >
          Cheadle Community Library
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#373D43]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 hover:text-[#1B4D3E] hover:underline underline-offset-4 decoration-2 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile drawer button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#visit"
            className="hidden sm:inline-flex items-center justify-center min-h-[42px] px-4 py-2 rounded-lg bg-[#1B4D3E] text-white text-sm font-medium hover:bg-[#143B2F] transition-colors whitespace-nowrap shrink-0"
          >
            Opening Hours
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg border border-[#D8D4C9] bg-white text-[#1B2024] hover:bg-[#F3F2EE] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Accessible mobile menu */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-[#E4E2DC] bg-[#FAF9F6] px-4 py-3 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 rounded-lg text-base font-medium text-[#1B2024] hover:bg-[#EDF4F1] hover:text-[#1B4D3E] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 pb-1">
            <a
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center min-h-[44px] px-4 rounded-lg bg-[#1B4D3E] text-white text-base font-medium hover:bg-[#143B2F] transition-colors"
            >
              Opening Hours & Visit
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
