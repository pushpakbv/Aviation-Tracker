// ErrorBoundary.jsx
import React from 'react'

export default function ErrorBoundary({ error }) {
  return (
    <div className="error">
      <h2>Oops! Something went wrong.</h2>
      <p>{error?.message || 'An unexpected error occurred.'}</p>
    </div>
  )
}
