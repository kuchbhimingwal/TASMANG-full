import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import { useSelector } from 'react-redux';
const Layout = () => {
  const isLogged = useSelector(((state)=> state.loogedIn.value));
  if(isLogged){
    return (
      <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
    )
 } else {
    return (
      <div className="">
        <Header />
        <Outlet />
        <Footer />
      </div>
    )
  }
};

export default Layout;