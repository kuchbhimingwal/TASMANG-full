import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import { useSelector } from 'react-redux';
import SideNavBar from "./components/SideNavBar";
const Layout = () => {
  const isLogged = useSelector(((state)=> state.loogedIn.value));
  if(isLogged){
    return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Header />
        <div className='mx-10 grid grid-cols-6'>
          <div className='hidden md:block col-span-1 mt-20'>
            <SideNavBar />
          </div>
          <div className='md:col-span-5 col-span-6'>
            <div className='text-2xl font-bold pl-5 pt-3'>Task Management</div>
              <Outlet />
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
    )
 } else {
    return (
      <div className="">
        {/* <Header /> */}
        <Outlet />
        {/* <Footer /> */}
      </div>
    )
  }
};

export default Layout;