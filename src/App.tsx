import Layout from './Components/layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'

function App() {
  

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Layout>
  )
}

export default App
