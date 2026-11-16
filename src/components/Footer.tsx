import { LIBRARY_CONTACT } from '../data/libraryInfo';

export function Footer() {
  return (
    <footer className="bg-[#1B2024] text-[#F3F2EE] py-12 border-t border-[#2E353B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#2E353B]">
          <div className="md:col-span-5">
            <p className="font-serif text-xl font-semibold text-white">{LIBRARY_CONTACT.name}</p>
            <p className="mt-2.5 text-base leading-relaxed text-[#D0D5DA] max-w-md">
              Book and video loans, digital access, and community activities in the heart of
              Cheadle, Staffordshire.
            </p>
            <p className="mt-3 text-sm text-[#B8C0C7]">{LIBRARY_CONTACT.address}</p>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-white mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm text-[#D0D5DA]">
              <li>
                <a href="#home" className="hover:text-white hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:underline">
                  Services & Activities
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white hover:underline">
                  Events Calendar
                </a>
              </li>
              <li>
                <a href="#e-library" className="hover:text-white hover:underline">
                  E-Library
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-white hover:underline">
                  Visit & Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-sm font-semibold text-white mb-3">Get in Touch</p>
            <ul className="space-y-2 text-sm text-[#D0D5DA]">
              <li>
                Phone:{' '}
                <a
                  href={LIBRARY_CONTACT.phoneHref}
                  className="text-white font-medium hover:underline tabular-nums"
                >
                  {LIBRARY_CONTACT.phone}
                </a>
              </li>
              <li>
                Email:{' '}
                <a
                  href={LIBRARY_CONTACT.emailHref}
                  className="text-white font-medium hover:underline break-all"
                >
                  {LIBRARY_CONTACT.email}
                </a>
              </li>
              <li>
                Facebook:{' '}
                <a
                  href={LIBRARY_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:underline"
                >
                  {LIBRARY_CONTACT.facebookLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-[#B8C0C7]">
          <p>© {new Date().getFullYear()} Cheadle Community Library, Staffordshire.</p>
          <p className="tabular-nums">
            Mon–Fri 09:00–17:00 · Sat 09:00–12:00 · 15A–17 High Street, ST10 1AA
          </p>
        </div>
      </div>
    </footer>
  );
}
