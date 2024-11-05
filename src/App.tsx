import Layout from './Components/layout/Layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Movie from './Pages/Movie/Movie'

function App() {
  

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Movie/:id' element={<Movie/>}/>
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes>
    </Layout>
  )
}

export default App
