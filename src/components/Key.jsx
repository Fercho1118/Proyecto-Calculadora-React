import React from 'react'
export default function Key({ value, onClick, className = '' }) {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            onClick(value)
        }
    }

    return (
      <button
        className={`key ${className}`}
        onClick={() => onClick(value)}
        onKeyDown={handleKeyDown}
        data-testid={`key-${value}`}
      >
        {value}
      </button>
    )
}