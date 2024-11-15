import Layout from './Components/layout/Layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Movie from './Pages/Movie/Movie'
import Search from './Pages/Search/Search'
import { useSelector } from 'react-redux'
import { RootState } from './Redux/store'
import LogIn from './Pages/LogIn/LogIn'
import PrivateRoute from './Components/privateroute/PrivateRoute'
import Cart from './Pages/Cart/Cart'

function App() {
  const {login} = useSelector((state:RootState) => state.Login)
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Auth' element={login ? <Navigate to='/'/> : <LogIn/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path='/cart' element={<Cart/>}/>
        </Route>
        <Route path='/Movie/:id' element={<Movie/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes>
    </Layout>
  )
}

export default App
