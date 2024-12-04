import React from 'react'

const SeparationLine = ({ margin }) => {

  const my = `my-${margin}`;

  return (
    <div className={`bg-gray-500/40 h-[1px] ${my}`}></div>
  )
}

export default SeparationLine