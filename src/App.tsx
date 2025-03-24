import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AddReservation from "./components/ReservationForm/AddReservation";
import EditReservation from "./components/ReservationForm/EditReservation";
import ReservationBoard from "./components/ReservationsDashboard/ReservationBoard";
import { ReservationsContextProvider } from "./context/ReservationContext";

function App() {
  return (
    <ReservationsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<ReservationBoard />} />
            <Route path="/edit/:id" element={<EditReservation />} />
            <Route path="/add/" element={<AddReservation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ReservationsContextProvider>
  );
}

export default App;
