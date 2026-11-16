export type EventCategory = 'All' | 'Weekly Groups' | 'Families & Youth' | 'Heritage & Talks';

export interface LibraryEvent {
  id: string;
  title: string;
  category: Exclude<EventCategory, 'All'>;
  recurrenceOrDate: string;
  time: string;
  location: string;
  cost: string;
  description: string;
  bookingNote: string;
}

/**
 * GOOGLE WORKSPACE CALENDAR EMBED URL
 * -----------------------------------
 * To display your live Google Workspace Calendar on the website:
 * 1. Open Google Calendar -> Settings for your library calendar -> "Integrate calendar".
 * 2. Copy the "Embed code" iframe `src` URL (starts with https://calendar.google.com/calendar/embed?...).
 * 3. Paste that URL between the quotes below and save this file.
 *
 * When left empty (""), the website automatically displays a clear, helpful
 * placeholder frame ready for your Google Workspace Calendar embed.
 */
export const GOOGLE_CALENDAR_EMBED_URL = '';

/**
 * EASY-TO-EDIT UPCOMING EVENTS LIST
 * ---------------------------------
 * Library volunteers and staff can add, update, or remove events directly below.
 * Keep dates, times, and locations concise so they remain easy to scan.
 */
export const UPCOMING_EVENTS: LibraryEvent[] = [
  {
    id: 'knit-and-natter-weekly',
    title: 'Knit and Natter Drop-In',
    category: 'Weekly Groups',
    recurrenceOrDate: 'Every Wednesday',
    time: '1:30pm – 3:00pm',
    location: 'Upstairs Main Library Area',
    cost: 'Free · Drop-in',
    description:
      'Bring along your current knitting, crochet, or stitching project for an unhurried afternoon of craft and conversation with neighbours.',
    bookingNote: 'No booking needed — just pop upstairs and join the table.',
  },
  {
    id: 'ancestry-support-sessions',
    title: 'One-to-One Ancestry Research Support',
    category: 'Heritage & Talks',
    recurrenceOrDate: 'By Appointment',
    time: 'Flexible daytime slots',
    location: 'Study Desk · Main Library',
    cost: 'Free · Pre-booked',
    description:
      'Meet with our ancestry support volunteer to explore Staffordshire parish records, census returns, and family history archives.',
    bookingNote: 'Call 01538 332068 or email Cheadle.library@staffordshire.gov.uk to book.',
  },
  {
    id: 'family-weekend-browsing',
    title: 'Family Book & Video Borrowing Hour',
    category: 'Families & Youth',
    recurrenceOrDate: 'Mondays & After School',
    time: '3:15pm – 4:45pm',
    location: 'Children’s & Family Corner',
    cost: 'Free with Library Card',
    description:
      'Browse picture books, junior fiction, homework guides, and family video loans together in a calm, welcoming space after school.',
    bookingNote: 'Free membership for children and families — ask at the front desk.',
  },
  {
    id: 'digital-help-desk',
    title: 'Friendly Computer, USB & Printing Help',
    category: 'Weekly Groups',
    recurrenceOrDate: 'Mondays (and scheduled open hours)',
    time: '09:30am – 4:30pm',
    location: 'Public Computers & Desk',
    cost: 'Free computer use · Printing from 15p',
    description:
      'Need help writing a letter in LibreOffice, scanning a document upstairs, or joining the online e-Library? Our volunteers are happy to guide you.',
    bookingNote: 'Drop in during opening hours or phone 01538 332068 to check desk times.',
  },
];
