// components/InputCard.js

import { useState } from "react"

const InputCard = ({ onSubmit, label, buttonText }) => {
  const [input, setInput] = useState("")

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <form>
        <div className="mb-4">
          <label htmlFor="inputField" className="block text-sm font-medium text-gray-700">
            {label}
          </label>
          <input
            type="text"
            id="inputField"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none focus:border-blue-800 focus:ring-blue-500 disabled:opacity-30 disabled:cursor-not-allowed"
          onClick={(e) => onSubmit(e, input)}
          disabled={input.length === 0}
        >
          {buttonText}
        </button>
      </form>
    </div>
  )
}

export default InputCard
