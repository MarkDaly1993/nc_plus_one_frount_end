import { useEffect, type Dispatch, type SetStateAction } from "react";
import type { RsvpAddResults } from "../types/types";
import type { RsvpState } from "../components/RsvpButton";

// type RsvpState =
//   | { status: "not rsvpd" }
//   | { status: "error"; message: string }
//   | { status: "rsvpd"; rsvpAddResult: Rsvp }
//   | { status: "already Rsvpd" };

class UnauthorisedError extends Error {}

interface useAddRsvpProps {
  eventId: number;
  token: string;
  setRsvpState: Dispatch<SetStateAction<RsvpState>>;
}

export default function useAddRsvp(props: useAddRsvpProps) {
  //   const [rsvpState, setRsvpState] = useState<RsvpState>({
  //     status: "not rsvpd"
  // //   });
  const { eventId, token, setRsvpState } = props;
  useEffect(() => {
    const loadRsvp = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/events/${eventId}/rsvp`,
          { method: "POST", headers: { Authorization: `Bearer ${token}` } },
        );

        if (response.status === 401) throw new UnauthorisedError();
        if (response.status === 409) setRsvpState({ status: "already Rsvpd" });

        if (!response.ok) throw new Error("Unable to make Rsvp");

        const data: RsvpAddResults = await response.json();

        setRsvpState({ status: "rsvpd", rsvpAddResult: data.rsvp });
      } catch (err) {
        setRsvpState(
          err instanceof UnauthorisedError && err instanceof Error
            ? { status: "error", message: err.message }
            : { status: "error", message: "something went wrong" },
        );
      }
    };
    loadRsvp();
  }, []);
  //   return rsvpState;
}
