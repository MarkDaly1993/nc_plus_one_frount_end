import { useEffect, useState, type ReactNode } from "react";
import { UserContext, type UserState } from "../Context/UserContext";
import {
  clearToken,
  readToken,
  writeToken,
} from "../Authentication/TokenManger";
import { decodeToken } from "../Authentication/decodeToken";

export function UserProvider({ children }: { children: ReactNode }) {
  const [userState, setUserState] = useState<UserState>(() =>
    readToken() ? { status: "loading" } : { status: "anonymous" },
  );
  useEffect(() => {
    const token = readToken();
    if (!token) return;

    try {
      const user = decodeToken(token);
      setUserState({ status: "success", user: { id: Number(user) } });
    } catch (err) {
      clearToken();
      setUserState({ status: "error", message: "User not logged in" });
    }
  }, []);
  const userLogin = async (email: string, password: string) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      },
    );
    if (response.status === 401) {
      throw new Error("Invalid email or password");
    }
    if (!response.ok) throw new Error("Unable to log in. Please try again");

    const { token } = await response.json();
    const userId = decodeToken(token);

    writeToken(token);
    setUserState({ status: "success", user: { id: Number(userId) } });
  };
  const logOut = async () => {
    clearToken();
    setUserState({ status: "anonymous" });
  };

  return (
    <UserContext value={{ userState, userLogin, logOut }}>
      {children}
    </UserContext>
  );
}
