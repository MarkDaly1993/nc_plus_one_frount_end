import { useState, useEffect } from "react";
import type { EventResult, Event } from "../types/types";

type EventState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; eventResult: Event };

export default function useSingleEvent(id: number) {
  const [eventState, setEventState] = useState<EventState>({
    status: "loading",
  });

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/events/${id}`);
        if (!response.ok) {
          throw new Error(`Could not load event (${response.status})`);
        }
        const data: EventResult = await response.json();

        setEventState({ status: "success", eventResult: data.event });
      } catch (err) {
        setEventState(
          err instanceof Error
            ? { status: "error", message: err.message }
            : { status: "error", message: "Something went wrong" },
        );
      }
    };
    loadEvent();
  }, []);
  return eventState;
}
