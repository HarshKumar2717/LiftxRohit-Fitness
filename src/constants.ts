export const BRAND = {
  name: 'LIFT X WITH ROHIT',
  shortName: 'LIFT X',
  trainer: 'MR. ROHIT',
  tagline: 'YOUR ONLY LIMIT IS YOUR MIND.',
  secondaryTagline: 'Fuel Your Body. Feed Your Ambition.',
  keywords: 'FITNESS | MINDSET | GROWTH',
};

export const CONTACT = {
  phoneDisplay: '90690 25834',
  phoneRaw: '+919069025834',
  phoneTel: 'tel:+919069025834',
  whatsapp: 'https://wa.me/919069025834',
  instagram: 'https://www.instagram.com/ro_hit3695/',
  instagramHandle: '@ro_hit3695',
  addressLines: ['Teen Murti Road,', 'Budh Vihar Phase - 2,', 'Delhi - 110086'],
  locationShort: 'DELHI • BUDH VIHAR PHASE - 2',
  mapsDirections: 'https://www.google.com/maps/search/?api=1&query=Teen+Murti+Road+Budh+Vihar+Phase+2+Delhi+110086',
};

export const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'TRAINING', href: '#training' },
  { label: 'COACHING', href: '#coaching' },
  { label: 'JOURNEY', href: '#journey' },
  { label: 'CONTACT', href: '#contact' },
] as const;

export const TRAINING_PROGRAMS = [
  {
    number: '01',
    title: 'STRENGTH TRAINING',
    description: 'Build strength, power and functional fitness.',
  },
  {
    number: '02',
    title: 'FAT LOSS TRAINING',
    description: 'Structured training focused on sustainable progress.',
  },
  {
    number: '03',
    title: 'MUSCLE BUILDING',
    description: 'Progressive training designed around strength and muscle development.',
  },
  {
    number: '04',
    title: 'PERSONAL TRAINING',
    description: 'Personalized guidance, training and accountability with Mr. Rohit.',
  },
] as const;

export const COACHING_PILLARS = [
  'PERSONAL GUIDANCE',
  'WORKOUT STRUCTURE',
  'PROGRESS TRACKING',
  'DISCIPLINE',
  'ACCOUNTABILITY',
  'MINDSET',
] as const;

export const WHY_FEATURES = [
  { number: '01', title: 'DISCIPLINE' },
  { number: '02', title: 'CONSISTENCY' },
  { number: '03', title: 'PERSONAL GUIDANCE' },
  { number: '04', title: 'SMART TRAINING' },
  { number: '05', title: 'ACCOUNTABILITY' },
  { number: '06', title: 'MINDSET' },
] as const;

export const JOURNEY_STEPS = [
  'START',
  'DISCIPLINE',
  'CONSISTENCY',
  'STRENGTH',
  'GROWTH',
] as const;

export const STATS = [
  { value: 1, suffix: '+', label: 'TRAINING MINDSET' },
  { value: 100, suffix: '%', label: 'DISCIPLINE' },
  { value: 24, suffix: '/7', label: 'GROWTH MINDSET' },
] as const;
