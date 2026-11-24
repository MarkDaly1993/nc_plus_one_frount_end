import type { ListedEvent } from "../types/types";
import ListedEventCard from "./ListedEventCard";

export default function MountEvents(props: { eventList: ListedEvent[] }) {
  return (
    <ul>
      {props.eventList.map((listedEvent) => (
        <ListedEventCard
          key={listedEvent.id}
          id={listedEvent.id}
          title={listedEvent.title}
          starts_at={listedEvent.starts_at}
          ends_at={listedEvent.ends_at}
          location={listedEvent.location}
        />
      ))}
    </ul>
  );
}
