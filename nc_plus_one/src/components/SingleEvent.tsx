import useSingleEvent from "../hooks/useSingleEvent";
import MouseEventCard from "./MountEventCard";

interface SingleEventProps {
  id: number;
}

export default function SingleEvent(props: SingleEventProps) {
  const { id } = props;
  const eventState = useSingleEvent(id);
  if (eventState.status === "error") {
    return (
      <>
        <h3>{eventState.message}</h3>
      </>
    );
  }
  if (eventState.status === "loading") {
    return <h3>Loading Event...</h3>;
  }
  return <MouseEventCard event={eventState.eventResult} />;
}
