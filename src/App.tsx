import { useState } from 'react'
import './App.css'

//router
import { Router } from './Router';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App
