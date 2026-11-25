import type { Event } from "../types/types";
import { formatDateTime } from "../functions/functions";

export default function MouseEventCard(props: { event: Event }) {
  const {
    id,
    title,
    description,
    starts_at,
    ends_at,
    location,
    address,
    capacity,
  } = props.event;

  return (
    <>
      <h3>{`${title} /#${id}`}</h3>
      <p>{description}</p>
      <p>{`Starting at: ${formatDateTime(starts_at)}`}</p>
      <p>{`Finishing at: ${formatDateTime(ends_at)}`}</p>
      <p>{`venue:${location}`}</p>
      <p>{address}</p>
      <p>{`capacity: ${capacity}`}</p>
    </>
  );
}
