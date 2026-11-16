import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import { LIBRARY_CONTACT } from '../data/libraryInfo';
import { ResilientImage } from './ResilientImage';

export function HeroSection() {
  return (
    <section id="home" className="border-b border-[#E4E2DC] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 lg:pt-14 lg:pb-14">
        {/* Two-column editorial hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-sm font-medium tracking-wide text-[#1B4D3E] mb-3">
              Cheadle, Staffordshire · High Street Community Hub
            </p>

            <h1 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.12] font-semibold text-[#1B2024] tracking-tight text-balance">
              Welcome to Cheadle Community Library
            </h1>

            <p className="mt-5 text-lg sm:text-xl leading-relaxed text-[#373D43] max-w-[60ch]">
              Book and video loans, digital access, and community activities in the heart of
              Cheadle.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#525860] max-w-[60ch]">
              Whether you are dropping in to browse large-print novels, bringing the children for
              storytime books, using our public computers, or joining Wednesday’s Knit and Natter,
              our volunteers are ready to welcome you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-lg bg-[#1B4D3E] text-white text-base font-medium hover:bg-[#143B2F] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Explore Services & Activities</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#visit"
                className="inline-flex items-center justify-center min-h-[48px] px-5 py-3 rounded-lg border border-[#D8D4C9] bg-white text-[#1B2024] text-base font-medium hover:bg-[#F3F2EE] transition-colors whitespace-nowrap shrink-0"
              >
                Visit & Opening Hours
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 min-h-[280px] sm:min-h-[360px] rounded-xl overflow-hidden border border-[#E4E2DC] bg-[#F3F2EE]">
              <ResilientImage
                src="/src/assets/images/hero_cheadle_library_1794845231463.jpg"
                alt="Warm sunlit interior of Cheadle Community Library with oak bookshelves and local residents reading."
                className="w-full h-full lg:h-full object-cover"
                fallbackTitle="Cheadle Community Library Reading Room"
              />
            </div>
            <p className="mt-2.5 text-xs font-serif italic text-[#525860]">
              Fig. 1 — Book and video loans, quiet study tables, and welcoming spaces at 15A–17 High
              Street.
            </p>
          </div>
        </div>

        {/* Full-width 4-column Operational Utility Ribbon below the hero split */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E4E2DC] rounded-xl bg-white divide-y sm:divide-y-0 sm:divide-x divide-[#E4E2DC]">
          <div className="p-5 flex items-start gap-3.5">
            <MapPin className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#525860]">Find Us</p>
              <p className="mt-1 text-base font-medium text-[#1B2024]">{LIBRARY_CONTACT.address}</p>
            </div>
          </div>

          <div className="p-5 flex items-start gap-3.5">
            <Clock className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#525860]">Opening Hours</p>
              <p className="mt-1 text-base font-medium text-[#1B2024] tabular-nums">
                Mon–Fri 09:00 – 17:00
              </p>
              <p className="text-sm text-[#525860] tabular-nums">Sat 09:00 – 12:00 · Sun Closed</p>
            </div>
          </div>

          <div className="p-5 flex items-start gap-3.5">
            <Phone className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#525860]">Telephone Desk</p>
              <a
                href={LIBRARY_CONTACT.phoneHref}
                className="mt-1 inline-block text-base font-semibold text-[#1B4D3E] hover:underline tabular-nums"
              >
                {LIBRARY_CONTACT.phone}
              </a>
              <p className="text-sm text-[#525860]">Book orders & enquiries</p>
            </div>
          </div>

          <div className="p-5 flex items-start gap-3.5">
            <div className="w-5 h-5 rounded-full border-2 border-[#1B4D3E] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-[#1B4D3E]">
              £0
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#525860]">Library Access</p>
              <p className="mt-1 text-base font-medium text-[#1B2024]">Free Membership & GovWifi</p>
              <p className="text-sm text-[#525860]">All ages welcome</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
