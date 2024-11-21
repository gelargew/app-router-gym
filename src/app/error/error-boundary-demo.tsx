'use client'

import { useState } from 'react'
import { submitForm } from './actions'


export default function ErrorBoundaryDemo() {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      await submitForm(null, new FormData())
    const formData = new FormData()
    formData.append('action', 'unexpected-error')
    await submitForm(null, formData)
    } catch (error) {
      console.error('Error caught:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-slate-900 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Error Boundary Demo</h2>
      <button
        onClick={handleClick}
        disabled={isLoading}
        className="px-4 py-2 bg-red-500 text-gray-100 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        {isLoading ? 'Loading...' : 'Trigger Unexpected Error'}
      </button>
    </div>
  )
}

