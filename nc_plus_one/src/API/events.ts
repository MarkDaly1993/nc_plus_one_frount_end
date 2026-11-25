import { apiGet } from "./client";
import type { EventResult, EventsResult } from "../types/types";

export const getEvents = (): Promise<EventsResult> =>
  apiGet<EventsResult>("/api/events");

export const getEvent = (id: number): Promise<EventResult> =>
  apiGet<EventResult>(`/api/event/${id}`);
