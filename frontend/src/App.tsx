import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card>
        <h1 className='p-2'>React paint scheme app</h1>
      </Card>
    </>
  )
}

export default App
