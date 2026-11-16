import { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, Info } from 'lucide-react';
import {
  GOOGLE_CALENDAR_EMBED_URL,
  UPCOMING_EVENTS,
  type EventCategory,
} from '../data/events';
import { LIBRARY_CONTACT } from '../data/libraryInfo';

const CATEGORIES: EventCategory[] = [
  'All',
  'Weekly Groups',
  'Families & Youth',
  'Heritage & Talks',
];

interface EventsSectionProps {
  onSelectEnquiryTopic: (topic: string) => void;
}

export function EventsSection({ onSelectEnquiryTopic }: EventsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');
  const [showEmbedHelp, setShowEmbedHelp] = useState(false);

  const filteredEvents =
    selectedCategory === 'All'
      ? UPCOMING_EVENTS
      : UPCOMING_EVENTS.filter((event) => event.category === selectedCategory);

  const handleEventEnquiry = (title: string) => {
    onSelectEnquiryTopic(`Event Enquiry: ${title}`);
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="events" className="py-14 lg:py-20 bg-white border-b border-[#E4E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#1B4D3E]">What’s On in Cheadle</p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#1B2024] tracking-tight text-balance">
              Upcoming Events & Calendar
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-[#525860]">
              Regular drop-in sessions, family browsing hours, and volunteer-led heritage support.
            </p>
          </div>

          {/* Interactive category filter buttons */}
          <div
            role="group"
            aria-label="Filter upcoming events by category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-lg bg-[#F3F2EE] border border-[#E4E2DC] self-start"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={active}
                  className={`min-h-[40px] px-3.5 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#1B4D3E] text-white'
                      : 'text-[#373D43] hover:bg-white hover:text-[#1B2024]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Easy-to-edit Upcoming Events List */}
          <div className="lg:col-span-7 space-y-5">
            {filteredEvents.length === 0 ? (
              <div className="p-8 rounded-xl border border-[#E4E2DC] bg-[#FAF9F6] text-center">
                <p className="font-serif text-xl font-semibold text-[#1B2024]">
                  No events listed in this category yet
                </p>
                <p className="mt-2 text-base text-[#525860]">
                  Choose another category above or check our Facebook page for seasonal updates.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('All')}
                  className="mt-4 min-h-[44px] px-4 py-2 rounded-lg bg-[#1B4D3E] text-white text-sm font-medium hover:bg-[#143B2F] transition-colors"
                >
                  Show All Events
                </button>
              </div>
            ) : (
              filteredEvents.map((event) => (
                <article
                  key={event.id}
                  className="p-6 sm:p-7 rounded-xl border border-[#E4E2DC] bg-[#FAF9F6]"
                >
                  {/* Clean unboxed typographic metadata with · separators */}
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-[#525860]">
                    <span className="font-semibold text-[#1B4D3E]">{event.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-[#1B2024] tabular-nums">
                      {event.recurrenceOrDate}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{event.time}</span>
                    <span aria-hidden="true">·</span>
                    <span>{event.cost}</span>
                  </div>

                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#1B2024]">
                    {event.title}
                  </h3>

                  <p className="mt-2.5 text-base leading-relaxed text-[#373D43]">
                    {event.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#E4E2DC] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="text-sm text-[#525860]">
                      <span className="font-semibold text-[#1B2024]">Where:</span> {event.location}{' '}
                      <span aria-hidden="true" className="mx-1.5">
                        ·
                      </span>
                      <span>{event.bookingNote}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleEventEnquiry(event.title)}
                      className="min-h-[40px] px-4 py-2 rounded-lg border border-[#D8D4C9] bg-white text-sm font-medium text-[#1B2024] hover:border-[#1B4D3E] hover:text-[#1B4D3E] transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto"
                    >
                      Ask About This Event
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* Google Workspace Calendar Embed Placeholder / Live Embed Container */}
          <aside className="lg:col-span-5 border border-[#E4E2DC] rounded-xl bg-[#FAF9F6] overflow-hidden">
            <div className="px-6 py-5 bg-white border-b border-[#E4E2DC] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-5 h-5 text-[#1B4D3E] shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#1B2024]">
                    Community Calendar
                  </h3>
                  <p className="text-sm text-[#525860]">Google Workspace Events Embed</p>
                </div>
              </div>
            </div>

            {GOOGLE_CALENDAR_EMBED_URL ? (
              <div className="p-4 bg-white">
                <iframe
                  title="Cheadle Community Library Google Workspace Calendar"
                  src={GOOGLE_CALENDAR_EMBED_URL}
                  className="w-full h-[460px] rounded-lg border border-[#E4E2DC]"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="p-6 space-y-5">
                <div className="p-5 rounded-lg bg-white border border-dashed border-[#C7C2B6]">
                  <p className="text-sm font-semibold text-[#1B4D3E]">
                    Google Workspace Calendar Area
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-[#373D43]">
                    This space is reserved for Cheadle Community Library’s shared Google Workspace
                    events calendar. Once connected, monthly sessions and special events will appear
                    automatically here.
                  </p>

                  {/* Clean static monthly reference preview */}
                  <div className="mt-5 pt-4 border-t border-[#E4E2DC]">
                    <div className="flex items-center justify-between text-sm font-semibold text-[#1B2024] mb-3">
                      <span>Regular Weekly Highlight</span>
                      <span className="text-[#1B4D3E] tabular-nums">Wed · 13:30–15:00</span>
                    </div>
                    <p className="text-sm text-[#525860]">
                      Knit and Natter meets every Wednesday afternoon upstairs in the main library
                      area. For short-notice events, also check{' '}
                      <a
                        href={LIBRARY_CONTACT.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#1B4D3E] underline"
                      >
                        {LIBRARY_CONTACT.facebookLabel}
                      </a>
                      .
                    </p>
                  </div>
                </div>

                {/* Toggleable Volunteer/Staff Embed Instructions */}
                <div className="border border-[#E4E2DC] rounded-lg bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setShowEmbedHelp((prev) => !prev)}
                    aria-expanded={showEmbedHelp}
                    className="w-full min-h-[44px] px-4 py-3 flex items-center justify-between gap-3 text-left text-sm font-semibold text-[#1B2024] hover:bg-[#F3F2EE] transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Info className="w-4 h-4 text-[#1B4D3E]" aria-hidden="true" />
                      <span>For Library Staff: How to Embed Google Calendar</span>
                    </span>
                    {showEmbedHelp ? (
                      <ChevronUp className="w-4 h-4 shrink-0" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-4 h-4 shrink-0" aria-hidden="true" />
                    )}
                  </button>

                  {showEmbedHelp && (
                    <div className="px-4 pb-4 pt-2 border-t border-[#E4E2DC] text-sm leading-relaxed text-[#373D43] space-y-2">
                      <p>
                        1. Open your Google Workspace Calendar settings and copy the public{' '}
                        <strong>Embed code</strong> link (<code className="text-xs">src="..."</code>
                        ).
                      </p>
                      <p>
                        2. Open <code className="text-xs font-semibold">src/data/events.ts</code>{' '}
                        and paste the link into <code className="text-xs">GOOGLE_CALENDAR_EMBED_URL</code>.
                      </p>
                      <p>
                        3. To add or edit individual events on the left, simply edit the{' '}
                        <code className="text-xs">UPCOMING_EVENTS</code> list in the same file.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
