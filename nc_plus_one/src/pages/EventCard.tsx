import { useParams } from "react-router";
import SingleEvent from "../components/SingleEvent";
import RsvpButton from "../components/RsvpButton";

export default function EventCard() {
  const { eventId } = useParams();
  console.log(eventId);
  const id = Number(eventId);
  return (
    <>
      <h3>{`Event ${id}`}</h3>
      <SingleEvent id={id} />
      <RsvpButton id={id} />
    </>
  );
}
