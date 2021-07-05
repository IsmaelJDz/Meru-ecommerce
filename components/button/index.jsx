import React from 'react'

const Button = ({ handleClick, title, width }) => {

  return (
    <button
      style={ width ? { width: '200px' } : null }
      onClick={handleClick}
      className="
      bg-gray-900
        border
        hover:border-gray-500
        text-white
        p-2
        hover:text-black
        hover:bg-white
      "
    >{title}</button>
  )
}

export default Button
