import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../page'
 
test('Home', () => {
  render(<Home />)
  expect(screen.getByText('Get started by editing')).toBeDefined()
})