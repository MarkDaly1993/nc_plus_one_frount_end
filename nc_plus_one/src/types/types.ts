export interface Event {
  id: number;
  title: string;
  description: string | null;
  starts_at: string;
  ends_at: string;
  location: string;
  address: string;
  capacity: number;
}

export interface ListedEvent {
  id: number;
  title: string;
  starts_at: string;
  ends_at: string;
  location: string;
}

export interface EventsResult {
  events: ListedEvent[];
}

export interface EventResult {
  event: Event;
}

export interface User {
  id: number;
}
