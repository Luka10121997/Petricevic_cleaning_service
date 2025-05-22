import React from 'react'

const WorkingHours = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md mt-10 w-full h-full">
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Radno vrijeme i područje djelovanja
        </h2>
      </div>
      <ul className="text-gray-700 dark:text-gray-300 space-y-1">
        <li><strong>Ponedjeljak – Subota:</strong> 09:00 – 17:00</li>
        <li><strong>Nedjelja:</strong> Zatvoreno</li>
        <li><strong>Područje djelovanja : Splitsko - dalmatinska županija</strong></li>
      </ul>
    </div>

  )
}

export default WorkingHours