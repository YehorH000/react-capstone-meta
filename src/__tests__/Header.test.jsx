import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header/Header'

test('renders logo and nav', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )

    const logoImg = screen.getByAltText(/Little Lemon logo/i)
    expect(logoImg).toBeInTheDocument()

    const homeLink = screen.getByRole('link', { name: /Little Lemon logo/i })
    expect(homeLink).toHaveAttribute('href', '/')
})
