import Layout from "./Components/layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Movie from "./Pages/Movie/Movie";
import Search from "./Pages/Search/Search";

import LogIn from "./Pages/LogIn/LogIn";
import PrivateRoute from "./Components/privateroute/PrivateRoute";
import Cart from "./Pages/Cart/Cart";
import { useLoginContext } from "./Context/LoginContext";

function App() {
  const { login } = useLoginContext();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={login ? <Navigate to="/" /> : <LogIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/Movie/:id" element={<Movie />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
