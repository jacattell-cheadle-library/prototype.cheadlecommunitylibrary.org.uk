import { useEffect, useState, type FormEvent } from 'react';
import { Check, Clock, Copy, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import {
  LIBRARY_CONTACT,
  OPENING_HOURS_NOTICE,
  WEEKLY_OPENING_HOURS,
} from '../data/libraryInfo';

interface VisitContactSectionProps {
  preselectedTopic: string;
}

const ENQUIRY_TOPICS = [
  'General Question',
  'Ancestry Research Appointment',
  'Meeting Room Hire',
  'Telephone Book Ordering',
  'Computers, Printing & Scanning',
  'Knit and Natter / Events',
];

export function VisitContactSection({ preselectedTopic }: VisitContactSectionProps) {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [name, setName] = useState('');
  const [contactDetail, setContactDetail] = useState('');
  const [topic, setTopic] = useState('General Question');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedTopic) {
      setTopic(preselectedTopic);
      setSubmitted(false);
    }
  }, [preselectedTopic]);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(LIBRARY_CONTACT.address);
      setCopiedAddress(true);
      window.setTimeout(() => setCopiedAddress(false), 2500);
    } catch {
      setCopiedAddress(false);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setFormError('');

    if (!name.trim()) {
      setFormError('Please enter your name so we know who to reply to.');
      return;
    }
    if (!contactDetail.trim()) {
      setFormError('Please enter a telephone number or email address.');
      return;
    }
    if (!message.trim()) {
      setFormError('Please add a brief note about how we can help.');
      return;
    }

    setSubmitted(true);
  };

  const mailtoDraftHref = `${LIBRARY_CONTACT.emailHref}?subject=${encodeURIComponent(
    `[Website Enquiry] ${topic}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nContact: ${contactDetail}\nTopic: ${topic}\n\nMessage:\n${message}`
  )}`;

  return (
    <section id="visit" className="py-14 lg:py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#1B4D3E]">Plan Your Visit</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#1B2024] tracking-tight text-balance">
            Visit, Opening Hours & Contact
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-[#525860]">
            Located right on Cheadle High Street. Pop in during opening hours, give our desk a
            ring, or send an email enquiry.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address, Contact Channels & Weekly Opening Hours */}
          <div className="lg:col-span-6 space-y-8">
            {/* Contact Details Card */}
            <div className="p-6 sm:p-8 rounded-xl border border-[#E4E2DC] bg-white space-y-6">
              <h3 className="font-serif text-2xl font-semibold text-[#1B2024]">
                Contact & Location
              </h3>

              <dl className="space-y-5 divide-y divide-[#E4E2DC]">
                <div className="pt-1 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <dt className="text-sm font-medium text-[#525860]">Address</dt>
                      <dd className="mt-0.5 text-lg font-medium text-[#1B2024]">
                        {LIBRARY_CONTACT.address}
                      </dd>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="min-h-[40px] px-3 py-1.5 rounded-lg border border-[#D8D4C9] bg-[#FAF9F6] text-sm font-medium text-[#1B2024] hover:bg-[#EDF4F1] hover:text-[#1B4D3E] inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-4 h-4 text-[#1B4D3E]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-5 flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <dt className="text-sm font-medium text-[#525860]">Telephone</dt>
                    <dd className="mt-0.5">
                      <a
                        href={LIBRARY_CONTACT.phoneHref}
                        className="text-lg font-semibold text-[#1B4D3E] hover:underline tabular-nums"
                      >
                        {LIBRARY_CONTACT.phone}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="pt-5 flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-1" aria-hidden="true" />
                  <div className="min-w-0">
                    <dt className="text-sm font-medium text-[#525860]">Email</dt>
                    <dd className="mt-0.5 break-words">
                      <a
                        href={LIBRARY_CONTACT.emailHref}
                        className="text-base sm:text-lg font-medium text-[#1B4D3E] hover:underline"
                      >
                        {LIBRARY_CONTACT.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="pt-5 flex items-start gap-3.5">
                  <ExternalLink
                    className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <dt className="text-sm font-medium text-[#525860]">Facebook Community Page</dt>
                    <dd className="mt-0.5 break-words">
                      <a
                        href={LIBRARY_CONTACT.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base sm:text-lg font-medium text-[#1B4D3E] hover:underline"
                      >
                        {LIBRARY_CONTACT.facebookLabel}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Opening Hours Card */}
            <div className="p-6 sm:p-8 rounded-xl border border-[#E4E2DC] bg-white">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#1B4D3E] shrink-0" aria-hidden="true" />
                <h3 className="font-serif text-2xl font-semibold text-[#1B2024]">Opening Hours</h3>
              </div>

              <div className="mt-4 p-4 rounded-lg bg-[#EDF4F1] border border-[#C9DDD4] text-sm leading-relaxed text-[#1B2024]">
                <p className="font-semibold text-[#1B4D3E]">Weekly Schedule</p>
                <p className="mt-1 text-[#373D43]">{OPENING_HOURS_NOTICE}</p>
              </div>

              <dl className="mt-5 divide-y divide-[#E4E2DC]">
                {WEEKLY_OPENING_HOURS.map((row) => (
                  <div
                    key={row.day}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                  >
                    <div>
                      <dt className="text-base font-semibold text-[#1B2024]">{row.day}</dt>
                      {row.note && <p className="text-sm text-[#525860] mt-0.5">{row.note}</p>}
                    </div>
                    <dd
                      className={`text-base tabular-nums ${
                        row.confirmed ? 'font-semibold text-[#1B4D3E]' : 'text-[#525860]'
                      }`}
                    >
                      {row.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right Column: Accessible Enquiry & Booking Request Helper */}
          <div
            id="contact-form"
            className="lg:col-span-6 p-6 sm:p-8 lg:p-10 rounded-xl border border-[#E4E2DC] bg-white"
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B2024]">
              Enquire or Request a Booking
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[#525860]">
              Prepare an enquiry for ancestry research appointments, ground floor meeting room
              hire, telephone book orders, or general questions.
            </p>

            {submitted ? (
              <div
                role="status"
                className="mt-6 p-6 rounded-xl bg-[#EDF4F1] border border-[#C9DDD4] space-y-4"
              >
                <p className="font-serif text-xl font-semibold text-[#1B4D3E]">
                  Your enquiry is ready to send
                </p>
                <p className="text-base leading-relaxed text-[#373D43]">
                  Thank you, <strong>{name}</strong>. Because this is a static community website,
                  please send your prepared message directly using your email app below, or call our
                  desk on{' '}
                  <a
                    href={LIBRARY_CONTACT.phoneHref}
                    className="font-semibold text-[#1B4D3E] underline tabular-nums"
                  >
                    {LIBRARY_CONTACT.phone}
                  </a>
                  .
                </p>

                <div className="p-4 rounded-lg bg-white border border-[#D8D4C9] text-sm text-[#373D43] space-y-1">
                  <p>
                    <strong>Topic:</strong> {topic}
                  </p>
                  <p>
                    <strong>Reply to:</strong> {contactDetail}
                  </p>
                  <p>
                    <strong>Message:</strong> {message}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={mailtoDraftHref}
                    className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-lg bg-[#1B4D3E] text-white text-base font-medium hover:bg-[#143B2F] transition-colors whitespace-nowrap shrink-0"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>Open in Email App</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setContactDetail('');
                      setMessage('');
                    }}
                    className="min-h-[48px] px-4 py-3 rounded-lg border border-[#D8D4C9] bg-white text-[#1B2024] text-base font-medium hover:bg-[#F3F2EE] transition-colors whitespace-nowrap shrink-0"
                  >
                    Write Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                {formError && (
                  <div
                    role="alert"
                    className="p-4 rounded-lg bg-[#FEF2F2] border border-[#FECACA] text-sm font-medium text-[#991B1B]"
                  >
                    {formError}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="enquiry-topic"
                    className="block text-base font-medium text-[#1B2024] mb-1.5"
                  >
                    What can we help with?
                  </label>
                  <select
                    id="enquiry-topic"
                    value={ENQUIRY_TOPICS.includes(topic) ? topic : 'General Question'}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-lg border border-[#C7C2B6] bg-white text-base text-[#1B2024] focus:border-[#1B4D3E]"
                  >
                    {ENQUIRY_TOPICS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                    {!ENQUIRY_TOPICS.includes(topic) && <option value={topic}>{topic}</option>}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-name"
                    className="block text-base font-medium text-[#1B2024] mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Margaret Smith"
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-lg border border-[#C7C2B6] bg-white text-base text-[#1B2024] placeholder:text-[#767D86]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry-contact"
                    className="block text-base font-medium text-[#1B2024] mb-1.5"
                  >
                    Your Phone Number or Email Address
                  </label>
                  <input
                    id="enquiry-contact"
                    type="text"
                    value={contactDetail}
                    onChange={(e) => setContactDetail(e.target.value)}
                    placeholder="e.g. 01538 000000 or name@example.com"
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-lg border border-[#C7C2B6] bg-white text-base text-[#1B2024] placeholder:text-[#767D86]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry-message"
                    className="block text-base font-medium text-[#1B2024] mb-1.5"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Let us know your preferred day, book preferences, or meeting room requirements..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#C7C2B6] bg-white text-base text-[#1B2024] placeholder:text-[#767D86]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <button
                    type="submit"
                    className="min-h-[48px] px-6 py-3 rounded-lg bg-[#1B4D3E] text-white text-base font-medium hover:bg-[#143B2F] transition-colors whitespace-nowrap shrink-0"
                  >
                    Prepare Email Enquiry
                  </button>
                  <p className="text-sm text-[#525860]">
                    Or call us directly on{' '}
                    <a
                      href={LIBRARY_CONTACT.phoneHref}
                      className="font-semibold text-[#1B4D3E] hover:underline tabular-nums"
                    >
                      {LIBRARY_CONTACT.phone}
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
