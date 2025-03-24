import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ReservationsDashboard from './components/ReservationsDashboard/ReservationsDashboard'
import ReservationForm from './components/ReservationForm/ReservationForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ReservationsDashboard />} />
          <Route path="/edit/:id" element={<ReservationForm />} />
          <Route path="/add/" element={<ReservationForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
