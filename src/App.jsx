import { useState } from 'react'
import RoutesMap from './routes'
import { Provider } from 'react-redux'
import store from './redux/store'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <RoutesMap/>
    </Provider>
  )
}

export default App
