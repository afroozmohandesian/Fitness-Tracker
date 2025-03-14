import { useState } from 'react'
import RoutesMap from './routes'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RoutesMap/>
    </>
  )
}

export default App
