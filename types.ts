export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  category: string;
  organizer: string;
  ticketPrice: number;
}

export interface Registration {
  eventId: number;
  name: string;
  email: string;
  tickets: number;
  registrationDate: string;
}