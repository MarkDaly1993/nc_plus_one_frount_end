import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
}
