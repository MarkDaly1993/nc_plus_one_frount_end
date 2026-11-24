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

export interface EventsResut {
  events: ListedEvent[];
}

export interface EventResult {
  event: Event;
}
