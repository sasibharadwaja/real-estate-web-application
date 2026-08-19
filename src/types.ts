export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface HighlightItem {
  title: string;
  description: string;
  iconName: string;
}

export interface AboutCardItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  city: string;
  emailAddress: string;
  interestedIn: string;
  preferredLocation: string;
  budget: string;
  message: string;
}
