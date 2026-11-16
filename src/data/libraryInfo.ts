export interface OpeningHourRow {
  day: string;
  hours: string;
  confirmed: boolean;
  note?: string;
}

export interface LibraryService {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
  actionLabel: string;
  actionType: 'printing-modal' | 'events-scroll' | 'ancestry-enquiry' | 'room-enquiry' | 'elibrary-scroll';
}

export interface PrintingRate {
  item: string;
  size: string;
  price: string;
  notes: string;
}

export const LIBRARY_CONTACT = {
  name: 'Cheadle Community Library',
  locationShort: 'Cheadle, Staffordshire',
  address: '15A–17 High Street, Cheadle, ST10 1AA',
  phone: '01538 332068',
  phoneHref: 'tel:01538332068',
  email: 'Cheadle.library@staffordshire.gov.uk',
  emailHref: 'mailto:Cheadle.library@staffordshire.gov.uk',
  facebookLabel: 'facebook.com/cheadlecommunitylibrary',
  facebookUrl: 'https://www.facebook.com/cheadlecommunitylibrary',
  eLibraryUrl: 'https://www.staffordshire.gov.uk/Libraries/elibrary/e-library.aspx',
} as const;

export const OPENING_HOURS_NOTICE =
  'Open Monday to Friday 09:00–17:00 and Saturday 09:00–12:00 (closed Sunday). For bank holiday or special session updates, call 01538 332068 or check our Facebook page.';

/**
 * Easy-to-edit weekly opening hours.
 * Confirmed from Cheadle Community Library homepage.
 */
export const WEEKLY_OPENING_HOURS: OpeningHourRow[] = [
  {
    day: 'Monday',
    hours: '09:00 – 17:00',
    confirmed: true,
    note: 'Main library & ground floor services open',
  },
  {
    day: 'Tuesday',
    hours: '09:00 – 17:00',
    confirmed: true,
  },
  {
    day: 'Wednesday',
    hours: '09:00 – 17:00',
    confirmed: true,
    note: 'Knit & Natter drop-in 13:30 – 15:00 upstairs',
  },
  {
    day: 'Thursday',
    hours: '09:00 – 17:00',
    confirmed: true,
  },
  {
    day: 'Friday',
    hours: '09:00 – 17:00',
    confirmed: true,
  },
  {
    day: 'Saturday',
    hours: '09:00 – 12:00',
    confirmed: true,
  },
  {
    day: 'Sunday',
    hours: 'Closed',
    confirmed: false,
  },
];

export const PRINTING_RATES: PrintingRate[] = [
  {
    item: 'GovWifi & Bookable Computers',
    size: '8 PCs (2 floors)',
    price: 'Free',
    notes:
      'Free high-speed GovWifi for everyone. 8 bookable computers for library members with internet access and LibreOffice Suite.',
  },
  {
    item: 'Document Scanning (Computer 7 Upstairs)',
    size: 'A4',
    price: 'Ask at desk',
    notes:
      'Canon CanoScan LiDE 300 A4 scanner located on computer number 7 upstairs; save directly to your USB stick.',
  },
  {
    item: 'A4 Black & White Printing / Photocopying',
    size: 'A4',
    price: '15p / page',
    notes: 'HP Colour LaserJet Managed MFP E786. Print from a library PC or USB-A memory stick.',
  },
  {
    item: 'A4 Colour Printing / Photocopying',
    size: 'A4',
    price: '50p / page',
    notes: 'Sharp colour copies from a library PC or USB-A stick; volunteers gladly help.',
  },
  {
    item: 'A3 Black & White Printing / Photocopying',
    size: 'A3',
    price: '30p / page',
    notes: 'Large-format black & white copies for posters, charts, and plans.',
  },
  {
    item: 'A3 Colour Printing / Photocopying',
    size: 'A3',
    price: '£1.00 / page',
    notes: 'Full A3 colour printing from a library PC or USB-A memory stick.',
  },
];

export const LIBRARY_SERVICES: LibraryService[] = [
  {
    id: 'computers-printing',
    number: '01',
    title: 'Computers, Printing & Scanning',
    category: 'Digital Access · 8 Computers Across 2 Floors & GovWifi',
    summary:
      'Free internet access with LibreOffice Suite. Bring a USB stick or buy one at the desk. Upstairs A4 scanner. Black & white and colour printing/photocopying up to A3 (starting at 15p/page for B&W).',
    highlights: [
      'Free high-speed GovWifi for everyone & 8 bookable computers with LibreOffice Suite',
      'Canon CanoScan LiDE 300 A4 scanner on computer number 7 upstairs',
      'HP Colour LaserJet MFP E786 (PC or USB-A stick): A4 B&W 15p, A4 colour 50p, A3 B&W 30p, A3 colour £1',
    ],
    image: '/src/assets/images/service_digital_printing_1794845233700.jpg',
    imageAlt: 'A library volunteer helping a visitor at a public computer and printing desk.',
    actionLabel: 'View Full Pricing & Hardware Guide',
    actionType: 'printing-modal',
  },
  {
    id: 'knit-and-natter',
    number: '02',
    title: 'Knit and Natter',
    category: 'Weekly Drop-In · Wednesdays 1:30pm–3:00pm',
    summary:
      'Free drop-in session every Wednesday from 1:30pm to 3:00pm in the upstairs main library area.',
    highlights: [
      'Every Wednesday, 1:30pm to 3:00pm',
      'Free to attend — no booking required',
      'Held in the upstairs main library area',
    ],
    image: '/src/assets/images/service_knit_natter_1794845232320.jpg',
    imageAlt: 'Wooden knitting needles, green and oatmeal wool yarn, and a warm mug of tea on a library oak table.',
    actionLabel: 'See Upcoming Sessions',
    actionType: 'events-scroll',
  },
  {
    id: 'ancestry-research',
    number: '03',
    title: 'Ancestry Research',
    category: '1-to-1 Volunteer Support · By Appointment',
    summary: 'Book an appointment with our ancestry support volunteer.',
    highlights: [
      'Guided family tree & local parish record searches',
      'Tailored one-to-one support for beginners and experienced researchers',
      'Book by phone on 01538 332068 or via our enquiry form',
    ],
    image: '/src/assets/images/service_ancestry_heritage_1794845233115.jpg',
    imageAlt: 'Historical Staffordshire parish maps, bound records, and a reading lamp on a library study table.',
    actionLabel: 'Book an Appointment',
    actionType: 'ancestry-enquiry',
  },
  {
    id: 'meeting-room-hire',
    number: '04',
    title: 'Meeting Room Hire',
    category: 'Ground Floor · Private Room & Public Spaces',
    summary:
      'Ground floor meeting room available to hire—contact us to book. Private room and public spaces can also be hired for local groups.',
    highlights: [
      'Accessible ground floor meeting room and public spaces off Cheadle High Street',
      'Suitable for local clubs, tutoring, community groups, and small meetings',
      'Contact the library desk or submit an enquiry to discuss availability',
    ],
    actionLabel: 'Enquire About Room Hire',
    actionType: 'room-enquiry',
  },
  {
    id: 'telephone-ordering',
    number: '05',
    title: 'Telephone Book Ordering & E-Library',
    category: 'Home Delivery, Collection & Online',
    summary:
      'Free online e-Library membership link and telephone ordering for home delivery/collection.',
    highlights: [
      'Free online e-Library membership for eBooks, eAudiobooks & digital magazines',
      'Call 01538 332068 to order books or videos for collection or home delivery',
      'Friendly recommendations across large print, fiction, and non-fiction',
    ],
    actionLabel: 'Explore E-Library & Ordering',
    actionType: 'elibrary-scroll',
  },
];
