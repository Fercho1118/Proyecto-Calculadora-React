import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import Display from '../components/Display'

describe('Display', () => {
  afterEach(cleanup)

  it('muestra 0 cuando el valor está vacío', () => {
    render(<Display value="" />)
    expect(screen.getByTestId('display')).toHaveTextContent('0')
  })

  it('muestra números positivos hasta 9 dígitos', () => {
    render(<Display value="123456789" />)
    expect(screen.getByTestId('display')).toHaveTextContent('123456789')
  })

  it('muestra "ERROR" para números positivos > 9 dígitos', () => {
    render(<Display value="1234567890" />)
    expect(screen.getByTestId('display')).toHaveTextContent('ERROR')
  })

  it('muestra números negativos hasta 8 dígitos (9 caracteres con el signo)', () => {
    render(<Display value="-12345678" />)
    expect(screen.getByTestId('display')).toHaveTextContent('-12345678')
  })

  it('muestra decimales positivos hasta 9 caracteres totales', () => {
    render(<Display value="123.45678" />) 
    expect(screen.getByTestId('display')).toHaveTextContent('123.45678')
  })

  it('muestra decimales negativos hasta 9 caracteres totales', () => {
    render(<Display value="-12.34567" />) 
    expect(screen.getByTestId('display')).toHaveTextContent('-12.34567')
  })

  it('muestra "ERROR" para valores > 999,999,999', () => {
    render(<Display value="1000000000" />)
    expect(screen.getByTestId('display')).toHaveTextContent('ERROR')
  })

  it('muestra "ERROR" para valores < -999,999,999', () => {
    render(<Display value="-1000000000" />)
    expect(screen.getByTestId('display')).toHaveTextContent('ERROR')
  })

  it('maneja correctamente el cero negativo', () => {
    render(<Display value="-0" />)
    expect(screen.getByTestId('display')).toHaveTextContent('-0')
  })
})