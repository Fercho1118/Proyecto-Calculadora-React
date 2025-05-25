import { useState } from 'react'

export default function useCalculatorLogic() {
  const [display, setDisplay] = useState('')
  const [storedValue, setStoredValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const handleKeyPress = (key) => {
    if (/\d/.test(key)) {
      handleNumber(key)
    } else if (key === '.') {
      handleDecimal()
    } else if (['+', '-', '*', '/', '%'].includes(key)) {
      handleOperation(key)
    } else if (key === '=') {
      handleEquals()
    } else if (key === 'C') {
      handleClear()
    } else if (key === '+/-') {
      handleSignChange()
    }
  }

  const handleNumber = (number) => {
    if (waitingForOperand) {
        setDisplay(number)
        setWaitingForOperand(false)
    } else {
        const newDisplay = display + number
        if (newDisplay.replace('-', '').replace('.', '').length <= 9) {
            setDisplay(newDisplay)
        }
    }
}

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (!display.includes('.')) {
      setDisplay(display.length < 9 ? display + '.' : display)
    }
  }

  const handleOperation = (op) => {
    const inputValue = parseFloat(display)

    if (storedValue === null) {
      setStoredValue(inputValue)
    } else if (operation) {
      const result = calculate(storedValue, inputValue, operation)
      setStoredValue(result)
      setDisplay(String(result).slice(0, 9))
    }

    setWaitingForOperand(true)
    setOperation(op)
  }

  const handleEquals = () => {
    if (operation === null || storedValue === null) return

    const inputValue = parseFloat(display)
    const result = calculate(storedValue, inputValue, operation)

    setDisplay(String(result).slice(0, 9))
    setStoredValue(null)
    setOperation(null)
    setWaitingForOperand(true)
  }

  const handleClear = () => {
    setDisplay('')
    setStoredValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const handleSignChange = () => {
    if (display === '' || display === '0') return
    
    if (display === 'ERROR') {
      setDisplay('0')
      return
    }
  
    const newValue = display.startsWith('-') 
      ? display.substring(1)
      : '-' + display
    
    if (newValue.length > 10) return
    
    setDisplay(newValue)
  }

  const calculate = (a, b, op) => {
    let result
    switch (op) {
      case '+': result = a + b; break
      case '-': result = a - b; break
      case '*': result = a * b; break
      case '/': result = a / b; break
      case '%': result = a % b; break
      default: return b
    }
  
    if (op === '/') {
      const strResult = String(result)
      
      if (Number.isInteger(result)) {
        if (result < 0) return 'ERROR'
        if (result > 999999999) return 'ERROR'
        if (strResult.length > 9) return 'ERROR'
        return result
      }
      
      const [integerPart, decimalPart = ''] = strResult.split('.')
      const availableDigits = 8 - integerPart.length 
      
      if (integerPart.length >= 9) {
        return 'ERROR'
      }
      
      if (availableDigits > 0) {
        const limitedDecimal = decimalPart.slice(0, availableDigits)
        const finalResult = `${integerPart}.${limitedDecimal}`
        return finalResult.length > 9 ? finalResult.slice(0, 9) : finalResult
      }
      
      return integerPart 
    }
  
    if (result < 0) return 'ERROR'
    if (result > 999999999) return 'ERROR'
    if (String(result).length > 9) return 'ERROR'
  
    return result
  }

  return { display, handleKeyPress }
}