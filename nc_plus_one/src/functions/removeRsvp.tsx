export default async function removeRsvp(id: number, token: string) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/events/${id}/rsvp/me`,
      { method: "DELETE", headers: { Authorization: `Bearer ${token}` } },
    );
    if (response.status === 401)
      throw new Error("Unathoried token need to Login");
    if (response.status === 404) throw new Error("No event with this id");
    if (!response.ok) throw new Error("Unable to remove rsvp");
    return "success";
  } catch (err) {
    return err instanceof Error ? err.message : "unable to delete rsvp";
  }
}
