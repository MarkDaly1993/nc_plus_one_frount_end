import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <header>
        <h1>Welcome to Daly Events</h1>
        <h2>We Post Events Daily</h2>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          end
        >
          Current Events
        </NavLink>
        <NavLink
          to="/user/login"
          className={({ isActive }) =>
            isActive ? "nav-link activate" : "nav-link"
          }
          end
        >
          Login
        </NavLink>
        <NavLink
          to="/user/register"
          className={({ isActive }) =>
            isActive ? "nav-link activate" : "nav-link"
          }
          end
        >
          Register
        </NavLink>
        <NavLink
          to="/user/:userId"
          className={({ isActive }) =>
            isActive ? "nav-link activate" : "nav-link"
          }
          end
        >
          Profile
        </NavLink>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
