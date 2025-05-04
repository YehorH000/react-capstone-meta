import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import ReservationPage from './pages/ReservationPage/ReservationPage'
import ReservationConfirmation from './pages/ReservationConfirmation/ReservationConfirmation'

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/reservations" element={<ReservationPage />} />
                <Route
                    path="/confirmation"
                    element={<ReservationConfirmation />}
                />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
