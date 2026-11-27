import type { Dispatch, SetStateAction } from "react";
import { readToken } from "../Authentication/TokenManger";
import useAddRsvp from "../hooks/useAddRsvp";
import type { RsvpState } from "./RsvpButton";

interface AddRsvpProps {
  eventId: number;
  setRsvpState: Dispatch<SetStateAction<RsvpState>>;
}

export default function AddRsvp(props: AddRsvpProps) {
  const { eventId, setRsvpState } = props;
  const token = readToken();
  if (!token) throw new Error("Need to be logged in");

  return <div>AddRsvp</div>;
}
//     <useAddRsvp eventId={eventId} token={token} setRsvpState={setRsvpState}/>)

// import React, { useState } from 'react';

// interface ChildProps {
//   setCount: React.Dispatch<React.SetStateAction<number>>;
// }

// function Child({ setCount }: ChildProps) {
//   return <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>;
// }
