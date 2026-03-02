import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('Loading...')

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL || ''

    fetch(`${baseUrl}/api/message`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        setStatus(data.message)
      })
      .catch((error) => {
        setStatus(`Unable to reach backend: ${error.message}`)
      })
  }, [])

  return (
    <main className="app">
      <h1>IronHide Supplies MERN Starter</h1>
      <p className="status">{status}</p>
      <p className="hint">
        Frontend: <code>ih-frontend</code> | Backend: <code>ih-backend</code>
      </p>
    </main>
  )
}

export default App
