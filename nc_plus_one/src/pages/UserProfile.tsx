import { useUser } from "../hooks/useUser";

export default function UserProfile() {
  const userState = useUser();
  if (userState.userState.status === "success")
    return <h2>Profile for user: {userState.userState.user.id}:</h2>;

  return <h2>User not logged in</h2>;
}
