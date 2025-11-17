import { useState } from 'react'
import './App.css'
import MainContent from './MainContent.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainContent />
    </>
  )
}

export default App
