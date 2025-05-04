import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import ReservationConfirmation from '../pages/ReservationConfirmation/ReservationConfirmation'

test('renders confirmation with passed reservation data', () => {
    const testState = {
        date: '2025-05-10',
        time: '19:00',
        guests: 4,
        occasion: 'Birthday',
    }

    render(
        <MemoryRouter
            initialEntries={[{ pathname: '/confirmation', state: testState }]}
        >
            <Routes>
                <Route
                    path="/confirmation"
                    element={<ReservationConfirmation />}
                />
            </Routes>
        </MemoryRouter>
    )

    expect(
        screen.getByText(/Your Reservation Is Confirmed!/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/2025-05-10/)).toBeInTheDocument()
    expect(screen.getByText(/19:00/)).toBeInTheDocument()
    expect(screen.getByText(/4/)).toBeInTheDocument()
    expect(screen.getByText(/Birthday/)).toBeInTheDocument()
})
