import React from 'react'
import Key from './Key'
export default function Keypad({ onKeyPress, activeOperation }) {
  const keys = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C', '+/-', '%']
  return (
    <div className="keypad" data-testid="keypad">
      {keys.map(key => (
        <Key
          key={key}
          value={key}
          onClick={onKeyPress}
          className={key === activeOperation ? 'operation active' : isOperation(key) ? 'operation' : ''}
        />
      ))}
    </div>
  )
}
function isOperation(key) {
  return ['+', '-', '*', '/', '=', '%', '+/-', 'C'].includes(key)
}