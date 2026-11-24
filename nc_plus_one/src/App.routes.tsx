import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import EventListPage from "./pages/EventsList";
import EventCard from "./pages/EventCard";
import UserLogin from "./pages/UserLogin";
import RegisterNewUser from "./pages/RegisterNewUser";
import UserProfile from "./pages/UserProfile";
import RsvpList from "./pages/RsvpList";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/events" element={<EventListPage />} />
        <Route path="/events/:eventId" element={<EventCard />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<RegisterNewUser />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/user/:userId/rsvps" element={<RsvpList />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
