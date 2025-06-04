import React, { PropsWithChildren } from 'react'

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return (
    <div className="flex items-center gap-2 mt-1 ml-1 text-sm text-red-600 bg-red-100 border border-red-300 px-3 py-2 rounded-md">
      <svg
        className="w-4 h-4 text-red-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M18 16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v12zM9 7a1 1 0 012 0v4a1 1 0 11-2 0V7zm0 6a1 1 0 102 0 1 1 0 00-2 0z"
          clipRule="evenodd"
        />
      </svg>
      <span>{children}</span>
    </div>
  )
}

export default ErrorMessage