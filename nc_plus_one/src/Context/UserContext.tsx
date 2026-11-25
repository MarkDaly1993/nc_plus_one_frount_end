import { createContext } from "react";
import type { User } from "../types/types";

export type UserState =
  | { status: "loading" }
  | { status: "anonymous" }
  | { status: "success"; user: User }
  | { status: "error"; message: string };

export interface userContextValue {
  userState: UserState;
  userLogin: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
}

export const UserContext = createContext<userContextValue | undefined>(
  undefined,
);
