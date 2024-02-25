// routes/guestRoutes.js
import { Routes, Route } from "react-router-dom";
import Guest from "../../pages/guest/Guest";
import Settings from "../../pages/dashboard/Settings";

const GuestRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Guest />} />
      <Route path="/settings/" element={<Settings />} />
    </Routes>
  );
};

export default GuestRoutes;
