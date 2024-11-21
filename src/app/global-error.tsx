'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-red-600">A critical error occurred</h2>
            <p className="text-gray-600 mb-4">We apologize for the inconvenience. A critical error has affected the entire application.</p>
            <p className="text-sm text-gray-500 mb-4">Error details: {error.message}</p>
            <button
              onClick={reset}
              className="w-full bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Try to recover the application
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}

