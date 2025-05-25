import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Key from '../components/Key'

describe('Key', () => {
  it('llama onClick con el valor correcto al hacer clic', () => {
    const mockClick = jest.fn()
    render(<Key value="5" onClick={mockClick} />)
    fireEvent.click(screen.getByText('5'))
    expect(mockClick).toHaveBeenCalledWith('5')
  })

  it('aplica la clase "operation" para teclas de operación', () => {
    render(<Key value="+" className="operation" />)
    expect(screen.getByText('+')).toHaveClass('operation')
  })

  it('maneja el evento keyDown para accesibilidad', () => {
    const mockClick = jest.fn()
    render(<Key value="C" onClick={mockClick} />)
    fireEvent.keyDown(screen.getByText('C'), { key: 'Enter' })
    expect(mockClick).toHaveBeenCalled()
  })
})