import { useParams } from "react-router";
import SingleEvent from "../components/SingleEvent";

export default function EventCard() {
  const { eventId } = useParams();
  console.log(eventId);
  const id = Number(eventId);
  return (
    <>
      <h3>{`Event ${id}`}</h3>
      <SingleEvent id={id} />
    </>
  );
}
