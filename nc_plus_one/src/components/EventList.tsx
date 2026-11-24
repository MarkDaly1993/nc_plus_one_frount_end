import { useEventList } from "../hooks/useEventList";
import MountEvents from "./MountEvents";

export default function EventList() {
  const eventsState = useEventList();
  if (eventsState.status === "error") {
    return (
      <>
        <h3>{eventsState.message}</h3>
      </>
    );
  }
  if (eventsState.status === "loading") {
    return <h3>Fetching Events...</h3>;
  }
  if (eventsState.eventResult.length === 0) {
    return <h3>No Current Events</h3>;
  }

  return (
    <>
      <MountEvents eventList={eventsState.eventResult} />
    </>
  );
}
