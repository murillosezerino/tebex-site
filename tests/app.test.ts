import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'

// Smoke test: verify the test environment is working correctly
describe('Vitest + jsdom environment', () => {
  it('renders a React element to the DOM', () => {
    render(React.createElement('h1', null, 'Tebex Site'))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tebex Site')
  })

  it('supports DOM queries', () => {
    render(
      React.createElement(
        'div',
        { 'data-testid': 'wrapper' },
        React.createElement('p', null, 'Hello from tebex-site')
      )
    )
    const wrapper = screen.getByTestId('wrapper')
    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveTextContent('Hello from tebex-site')
  })

  it('handles boolean attributes via jest-dom matchers', () => {
    render(React.createElement('button', { disabled: true }, 'Buy Now'))
    expect(screen.getByRole('button', { name: 'Buy Now' })).toBeDisabled()
  })
})

// Basic data validation: ensure environment constants are available
describe('process.env', () => {
  it('NODE_ENV is defined', () => {
    expect(process.env.NODE_ENV).toBeDefined()
  })
})
