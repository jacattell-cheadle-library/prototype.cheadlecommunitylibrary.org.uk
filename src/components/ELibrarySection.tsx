import { ArrowUpRight, BookOpen, PhoneCall } from 'lucide-react';
import { LIBRARY_CONTACT } from '../data/libraryInfo';

interface ELibrarySectionProps {
  onSelectEnquiryTopic: (topic: string) => void;
}

export function ELibrarySection({ onSelectEnquiryTopic }: ELibrarySectionProps) {
  const handleTelephoneEnquiry = () => {
    onSelectEnquiryTopic('Telephone Book Ordering');
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="e-library" className="py-14 lg:py-20 bg-[#FAF9F6] border-b border-[#E4E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#1B4D3E]">Read From Home</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#1B2024] tracking-tight text-balance">
            E-Library & Telephone Book Ordering
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-[#525860]">
            Enjoy borrowing whether you prefer reading on a tablet at home or picking up curated
            books and videos arranged over the phone.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Online E-Library Card */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-xl border border-[#E4E2DC] bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-[#1B4D3E]">
                <BookOpen className="w-6 h-6 shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold">Free Online E-Library Membership</span>
              </div>

              <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold text-[#1B2024]">
                Borrow eBooks, Audiobooks & Magazines Online
              </h3>

              <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#373D43]">
                With a free Staffordshire Libraries membership, you can download digital books,
                audiobooks, newspapers, and magazines straight to your phone, tablet, or e-reader
                at any hour.
              </p>

              <ol className="mt-6 space-y-3 border-t border-[#E4E2DC] pt-5 text-base text-[#373D43]">
                <li className="flex items-start gap-3">
                  <span className="font-serif font-semibold text-[#1B4D3E] tabular-nums">01.</span>
                  <span>
                    Join online for free or bring your library card number if you are already a
                    member.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-serif font-semibold text-[#1B4D3E] tabular-nums">02.</span>
                  <span>
                    Open the Staffordshire e-Library portal to browse thousands of fiction,
                    non-fiction, and children’s titles.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-serif font-semibold text-[#1B4D3E] tabular-nums">03.</span>
                  <span>
                    Need a hand setting up your tablet or phone? Bring it into the library during
                    open hours and a volunteer will gladly help.
                  </span>
                </li>
              </ol>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E4E2DC]">
              <a
                href={LIBRARY_CONTACT.eLibraryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-lg bg-[#1B4D3E] text-white text-base font-medium hover:bg-[#143B2F] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Join or Open Free E-Library</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <p className="mt-2.5 text-sm text-[#525860]">
                Opens the official Staffordshire Libraries e-Library page in a new tab.
              </p>
            </div>
          </div>

          {/* Telephone Book Ordering Card */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-xl border border-[#C9DDD4] bg-[#EDF4F1]/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-[#1B4D3E]">
                <PhoneCall className="w-6 h-6 shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold">Home Delivery & Desk Collection</span>
              </div>

              <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold text-[#1B2024]">
                Telephone Book & Video Ordering
              </h3>

              <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#373D43]">
                Prefer a friendly chat over using a computer? Call our desk and tell our volunteers
                the authors, subjects, or genres you enjoy—including large-print books and video
                loans.
              </p>

              <div className="mt-6 p-5 rounded-lg bg-white border border-[#D8D4C9]">
                <p className="text-sm font-medium text-[#525860]">Telephone Ordering Desk</p>
                <a
                  href={LIBRARY_CONTACT.phoneHref}
                  className="mt-1 inline-block font-serif text-3xl font-semibold text-[#1B4D3E] hover:underline tabular-nums"
                >
                  {LIBRARY_CONTACT.phone}
                </a>
                <p className="mt-2 text-base text-[#373D43]">
                  We will prepare your selection for easy collection at the desk or arrange home
                  delivery where available.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#C9DDD4] flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleTelephoneEnquiry}
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg bg-white border border-[#1B4D3E] text-[#1B4D3E] text-base font-medium hover:bg-[#1B4D3E] hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                Request a Book Order Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
