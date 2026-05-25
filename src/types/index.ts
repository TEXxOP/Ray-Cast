export interface Extension {
  icon: string;
  name: string;
  desc: string;
  cat: 'productivity' | 'engineering' | 'design' | 'writing';
}

export interface Testimonial {
  name: string;
  handle: string;
  role: string;
  color: string;
  quote: string;
}

export interface AutoCard {
  title: string;
  desc: string;
  color: string;
}

export interface DevFeature {
  icon: string;
  title: string;
  desc: string;
}
