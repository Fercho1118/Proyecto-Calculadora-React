import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Keypad from '../components/Keypad'

describe('Keypad', () => {
  it('renderiza todas las teclas numéricas (0-9)', () => {
    const mockPress = jest.fn()
    render(<Keypad onKeyPress={mockPress} />)
    for (let i = 0; i <= 9; i++) {
      expect(screen.getByText(i.toString())).toBeInTheDocument()
    }
  })

  it('dispara eventos correctos para operaciones complejas', () => {
    const mockPress = jest.fn()
    render(<Keypad onKeyPress={mockPress} />)
    fireEvent.click(screen.getByText('+/-'))
    expect(mockPress).toHaveBeenCalledWith('+/-')
  })
})