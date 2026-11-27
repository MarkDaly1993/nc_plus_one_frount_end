import { useState } from "react";
import { readToken } from "../Authentication/TokenManger";
import addRsvp from "../functions/addRsvp";
import removeRsvp from "../functions/removeRsvp";

// export type RsvpState =
//   | { status: "not rsvpd" }
//   | { status: "error"; message: string }
//   | { status: "rsvpd"; rsvpAddResult: Rsvp }
//   | { status: "already Rsvpd" };

export default function RsvpButton(props: { id: number }) {
  const { id } = props;
  const [rsvpState, setRsvpState] = useState(false);
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   try {
  //     const token = readToken();
  //     if (!token) throw new Error("Login is Required");
  //     if (rsvpState === "rsvpd") {
  //       addRsvp(id, token);
  //       setError("Your Rsvp Has Been Added");
  //     }
  //     if (rsvpState === "add rsvp") {
  //       removeRsvp(id, token);
  //       setError("We Have Removed Your Rsvp");
  //     }
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : "Could not add Rsvp");
  //   }
  // }, [handleClick]);
  async function handleAddRsvp(token: string) {
    const result = await addRsvp(id, token);
    console.log(result);
    if (result === "success") {
      setRsvpState(true);
    }
    setMessage(result);
  }

  async function handleRemoveRsvp(token: string) {
    const result = await removeRsvp(id, token);
    console.log(result);
    if (result === "success") {
      setRsvpState(false);
    }
    setMessage(result);
  }

  function handleClick() {
    try {
      const token = readToken();
      if (!token) throw new Error("Login is required");
      if (!rsvpState) {
        handleAddRsvp(token);
      }
      if (rsvpState) {
        handleRemoveRsvp(token);
      }
    } catch (err) {
      err instanceof Error
        ? setMessage(err.message)
        : setMessage("could not Rsvp");
    }
  }

  return (
    <div>
      <button onClick={handleClick}>{rsvpState ? "rsvpd" : "add rsvp"}</button>
      <p>{message}</p>
    </div>
  );
}
