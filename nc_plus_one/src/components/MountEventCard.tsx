import type { Event } from "../types/types";

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
      <p>{starts_at}</p>
      <p>{ends_at}</p>
      <p>{location}</p>
      <p>{address}</p>
      <p>{capacity}</p>
    </>
  );
}
