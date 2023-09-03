import { useState } from 'react'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'


function App() {
  const [count, setCount] = useState(0)

  return ( 
    <div>
      <Router>
        <Layout>
          <Routes>
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App
