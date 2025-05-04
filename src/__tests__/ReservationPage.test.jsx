import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ReservationPage from '../pages/ReservationPage/ReservationPage'

const renderWithRouter = (ui) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>)
}

test('renders reservation form with required fields', () => {
    renderWithRouter(<ReservationPage />)

    expect(screen.getByText(/Little Lemon/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument()
})

test('shows validation error when submitting empty form', () => {
    renderWithRouter(<ReservationPage />)

    const submitButton = screen.getByText(/Make Your Reservation/i)
    fireEvent.click(submitButton)

    expect(
        screen.getByText(/Please select a valid future date/i)
    ).toBeInTheDocument()
})
