import { useState, useEffect } from "react";
import type { EventsResut, ListedEvent } from "../types/types";

type EventState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; eventResult: ListedEvent[] };

export function useEventList() {
  const [eventsState, setEventsState] = useState<EventState>({
    status: "loading",
  });

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/events");
        if (!response.ok) {
          throw new Error(`Could not load events (${response.status})`);
        }
        const data: EventsResut = await response.json();

        setEventsState({
          status: "success",
          eventResult: data.events,
        });
      } catch (err) {
        setEventsState(
          err instanceof Error
            ? { status: "error", message: err.message }
            : { status: "error", message: "Something went wrong" },
        );
      }
    };
    loadEvents();
  }, []);
  return eventsState;
}

// http://127.0.0.1:8000
