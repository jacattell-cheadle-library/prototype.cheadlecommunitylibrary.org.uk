import { ArrowRight, Check } from 'lucide-react';
import { LIBRARY_SERVICES, type LibraryService } from '../data/libraryInfo';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onOpenPrintingGuide: () => void;
  onSelectEnquiryTopic: (topic: string) => void;
}

export function ServicesSection({
  onOpenPrintingGuide,
  onSelectEnquiryTopic,
}: ServicesSectionProps) {
  const handleServiceAction = (actionType: LibraryService['actionType']) => {
    switch (actionType) {
      case 'printing-modal':
        onOpenPrintingGuide();
        break;
      case 'events-scroll':
        document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'ancestry-enquiry':
        onSelectEnquiryTopic('Ancestry Research Appointment');
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'room-enquiry':
        onSelectEnquiryTopic('Meeting Room Hire');
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'elibrary-scroll':
        document.getElementById('e-library')?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  };

  const featuredService = LIBRARY_SERVICES[0];
  const visualServices = LIBRARY_SERVICES.slice(1, 3);
  const compactServices = LIBRARY_SERVICES.slice(3);

  return (
    <section id="services" className="py-14 lg:py-20 bg-white border-b border-[#E4E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#1B4D3E]">What We Offer</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#1B2024] tracking-tight text-balance">
            Services & Community Activities
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-[#525860]">
            Practical digital support, welcoming weekly groups, and local room hire under one roof
            on Cheadle High Street.
          </p>
        </div>

        {/* Tier 1: Featured Wide Service Card (Computers, Printing & Scanning) */}
        <article className="mt-10 grid grid-cols-1 lg:grid-cols-12 border border-[#E4E2DC] rounded-xl overflow-hidden bg-[#FAF9F6]">
          <div className="lg:col-span-5 min-h-[240px] lg:min-h-full bg-[#F3F2EE] border-b lg:border-b-0 lg:border-r border-[#E4E2DC]">
            <ResilientImage
              src={featuredService.image}
              alt={featuredService.imageAlt || featuredService.title}
              className="w-full h-full object-cover"
              fallbackTitle={featuredService.title}
            />
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-[#525860]">
                <span className="font-semibold text-[#1B4D3E] tabular-nums">
                  {featuredService.number}.
                </span>
                <span aria-hidden="true">·</span>
                <span>{featuredService.category}</span>
              </div>

              <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-[#1B2024]">
                {featuredService.title}
              </h3>

              <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#373D43]">
                {featuredService.summary}
              </p>

              <ul className="mt-5 space-y-2.5">
                {featuredService.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base text-[#373D43]">
                    <Check
                      className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 pt-5 border-t border-[#E4E2DC] flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm font-medium text-[#525860] tabular-nums">
                A4 B&W 15p · A4 colour 50p · A3 B&W 30p · A3 colour £1 · Free GovWifi
              </p>
              <button
                type="button"
                onClick={() => handleServiceAction(featuredService.actionType)}
                className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg bg-[#1B4D3E] text-white text-base font-medium hover:bg-[#143B2F] transition-colors whitespace-nowrap shrink-0"
              >
                <span>{featuredService.actionLabel}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </article>

        {/* Tier 2: Visual Community & Heritage Cards (Knit & Natter + Ancestry Research) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {visualServices.map((service) => (
            <article
              key={service.id}
              className="flex flex-col border border-[#E4E2DC] rounded-xl overflow-hidden bg-[#FAF9F6]"
            >
              <div className="aspect-[4/3] w-full bg-[#F3F2EE] border-b border-[#E4E2DC]">
                <ResilientImage
                  src={service.image}
                  alt={service.imageAlt || service.title}
                  className="w-full h-full object-cover"
                  fallbackTitle={service.title}
                />
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm text-[#525860]">
                    <span className="font-semibold text-[#1B4D3E] tabular-nums">
                      {service.number}.
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{service.category}</span>
                  </div>

                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#1B2024]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#373D43]">
                    {service.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-base text-[#373D43]">
                        <Check
                          className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E4E2DC]">
                  <button
                    type="button"
                    onClick={() => handleServiceAction(service.actionType)}
                    className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg border border-[#D8D4C9] bg-white text-[#1B2024] text-base font-medium hover:bg-[#EDF4F1] hover:border-[#1B4D3E] hover:text-[#1B4D3E] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>{service.actionLabel}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Tier 3: Ground-Floor Room Hire & Telephone Ordering / E-Library */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {compactServices.map((service) => (
            <article
              key={service.id}
              className="p-6 sm:p-8 border border-[#E4E2DC] rounded-xl bg-[#FAF9F6] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-sm text-[#525860]">
                  <span className="font-semibold text-[#1B4D3E] tabular-nums">
                    {service.number}.
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{service.category}</span>
                </div>

                <h3 className="mt-2 font-serif text-2xl font-semibold text-[#1B2024]">
                  {service.title}
                </h3>

                <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#373D43]">
                  {service.summary}
                </p>

                <ul className="mt-4 space-y-2">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-base text-[#373D43]">
                      <Check
                        className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-[#E4E2DC]">
                <button
                  type="button"
                  onClick={() => handleServiceAction(service.actionType)}
                  className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg border border-[#D8D4C9] bg-white text-[#1B2024] text-base font-medium hover:bg-[#EDF4F1] hover:border-[#1B4D3E] hover:text-[#1B4D3E] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>{service.actionLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
