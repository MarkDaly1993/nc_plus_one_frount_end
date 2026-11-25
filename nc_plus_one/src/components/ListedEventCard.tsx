import { NavLink } from "react-router";
import type { ListedEvent } from "../types/types";
import { formatDateTime } from "../functions/functions";

// function formatDateTime(dateTime: string) {
//   const formatDateTime = new Date(dateTime).toUTCString();
//   return formatDateTime;
// }

export default function ListedEventCard(props: ListedEvent) {
  const { id, title, starts_at, ends_at, location } = props;
  return (
    <NavLink to={`/events/${id}`}>
      <li
        className="listed-event"
        key={id}
        aria-label={`Event Card for ${title}`}
      >
        <h3>{`${title} /#${id}`}</h3>
        <p>{`Starts :${formatDateTime(starts_at)}`}</p>
        <p>{`Finishes :${formatDateTime(ends_at)}`}</p>
        <p>{`venue :${location}`}</p>
      </li>
    </NavLink>
  );
}
