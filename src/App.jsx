import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar/TopBar'
import Main from './components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <Main />
    </>
  )
}

export default App
