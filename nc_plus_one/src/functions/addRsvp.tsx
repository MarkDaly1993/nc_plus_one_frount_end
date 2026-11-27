export default async function addRsvp(id: number, token: string) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/events/${id}/rsvp`,
      { method: "POST", headers: { Authorization: `Bearer ${token}` } },
    );
    if (response.status === 401)
      throw new Error("Unauthoried token need to login");
    if (response.status === 409)
      throw new Error("You have already have a Rsvp");
    if (!response.ok) throw new Error("Unable to Rsvp");
    return "success";
  } catch (err) {
    return err instanceof Error ? err.message : "Unable to rsvp ";
  }
}
