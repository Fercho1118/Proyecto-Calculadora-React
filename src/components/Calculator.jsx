import Display from './Display'
import Keypad from './Keypad'
import useCalculatorLogic from '../hooks/useCalculatorLogic'

export default function Calculator() {
  const { display, handleKeyPress } = useCalculatorLogic()

  return (
    <div className="calculator">
      <Display value={display} />
      <Keypad onKeyPress={handleKeyPress} />
    </div>
  )
}