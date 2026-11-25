import { useState, useEffect } from "react";
import type { EventsResult, ListedEvent } from "../types/types";
import { getEvents } from "../API/events";
import { ApiError } from "../API/client";

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
        const data: EventsResult = await getEvents();
        // if (!response.ok) {
        //   throw new Error(`Could not load events (${response.status})`);
        // }
        // const data: EventsResut = await response.json();

        setEventsState({
          status: "success",
          eventResult: data.events,
        });
      } catch (err) {
        setEventsState(
          err instanceof ApiError && err.status === 404
            ? { status: "error", message: "No events found" }
            : { status: "error", message: "Something went wrong" },
        );
      }
    };
    loadEvents();
  }, []);
  return eventsState;
}

// http://127.0.0.1:8000

// fetch("http://localhost:8000/api/events")
