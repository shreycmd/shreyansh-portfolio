import React from 'react'

function Button({val}) {
  return (
    <div>
    <button type="button" className="font-semibold bg-btn-grad hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-xl shadow-gray-500">{val}</button></div>
  )
}

export default Button