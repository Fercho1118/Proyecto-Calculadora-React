import React from 'react'
export default function Display({ value }) {
    const formatValue = (val) => {
        if (!val) return '0'
        
        if (val.replace('-', '').length > 9) return 'ERROR'
        
        const numericValue = parseFloat(val)
        if (Math.abs(numericValue) > 999999999) return 'ERROR'
        
        return val
    }

    return (
        <div className="display" data-testid="display">
            {formatValue(value)}
        </div>
    )
}