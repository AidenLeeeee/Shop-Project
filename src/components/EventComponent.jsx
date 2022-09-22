import { Outlet } from "react-router-dom";

export default function EventComponent() {
  return (
    <div>
      <h4>Events</h4>
      <Outlet></Outlet>
    </div>
  );
}
