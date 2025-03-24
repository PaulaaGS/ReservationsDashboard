import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ReservationsDashboard from "./components/ReservationsDashboard/ReservationsDashboard";
import EditReservation from "./components/ReservationForm/EditReservation";
import AddReservation from "./components/ReservationForm/AddReservation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ReservationsDashboard />} />
          <Route path="/edit/:id" element={<EditReservation />} />
          <Route path="/add/" element={<AddReservation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
