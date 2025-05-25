import { renderHook, act } from '@testing-library/react'
import useCalculatorLogic from '../hooks/useCalculatorLogic'

describe('useCalculatorLogic', () => {
  it('concatena dígitos correctamente', () => {
    const { result } = renderHook(() => useCalculatorLogic())
    act(() => result.current.handleKeyPress('1'))
    act(() => result.current.handleKeyPress('2'))
    expect(result.current.display).toBe('12')
  })

  it('realiza divisiones con precisión controlada', () => {
    const { result } = renderHook(() => useCalculatorLogic())
    act(() => result.current.handleKeyPress('2'))
    act(() => result.current.handleKeyPress('2'))
    act(() => result.current.handleKeyPress('/'))
    act(() => result.current.handleKeyPress('7'))
    act(() => result.current.handleKeyPress('='))
    expect(result.current.display).toBe('3.1428571') 
  })

  it('maneja el cambio de signo correctamente', () => {
    const { result } = renderHook(() => useCalculatorLogic())
    act(() => result.current.handleKeyPress('5'))
    act(() => result.current.handleKeyPress('+/-'))
    expect(result.current.display).toBe('-5')
  })

  it('muestra ERROR en overflow', () => {
    const { result } = renderHook(() => useCalculatorLogic())
    act(() => result.current.handleKeyPress('999999999'))
    act(() => result.current.handleKeyPress('+'))
    act(() => result.current.handleKeyPress('1'))
    act(() => result.current.handleKeyPress('='))
    expect(result.current.display).toBe('ERROR')
  })
})