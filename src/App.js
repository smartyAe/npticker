import logo from './logo-nptker.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import { ROUTES } from './Environement/APP_CONSTANTS';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Blog from './Components/Blog/Blog';
import { useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar/SideBar';
import Formation from './Components/Formation/Formation';


function App() {

  const [CurrentPage,setCurrentPage] = useState(ROUTES.home);

  useEffect(()=>{
    let path=window.location.pathname;
    console.log(path);
    if(path=="/npticker")
    {
      window.location.pathname=ROUTES.home;
      path=ROUTES.home;
    }
    setCurrentPage(path);
  },[]);
  


  return (
    <BrowserRouter>
            <nav className='ntk-navbar d-flex'>

                <img className='ntk-navbar-logo' src={logo} alt="Logo"/>

                <ul className='ntk-nav'>
                  <li className='ntk-nav-item'>
                    <Link className=
                      {
                        CurrentPage==ROUTES.home
                        ? 'ntk-nav-link active'
                        : 'ntk-nav-link'
                      }
                       to={ROUTES.home}
                       onClick={(e)=>setCurrentPage(ROUTES.home)}
                       >Home</Link>
                  </li>
                  <li className='ntk-nav-item'>
                    <Link className=
                    {
                      CurrentPage==ROUTES.services
                      ? 'ntk-nav-link active'
                      : 'ntk-nav-link'
                    }
                     onClick={(e)=>setCurrentPage(ROUTES.services)}
                      to={ROUTES.services}
                      >Services</Link>
                  </li>
                  <li className='ntk-nav-item'>
                    <Link className=
                    {
                      CurrentPage==ROUTES.projects
                      ? 'ntk-nav-link active'
                      : 'ntk-nav-link'
                    }
                     onClick={(e)=>setCurrentPage(ROUTES.projects)} to={ROUTES.projects}>Projects</Link>
                  </li>
                  <li className='ntk-nav-item'>
                    <Link className=
                    {
                      CurrentPage==ROUTES.formation
                      ? 'ntk-nav-link active'
                      : 'ntk-nav-link'
                    }
                     onClick={(e)=>setCurrentPage(ROUTES.formation)}
                     to={ROUTES.formation}>Formation</Link>
                  </li>
                  <li className='ntk-nav-item'>
                    <Link className=
                    {
                      CurrentPage==ROUTES.blog
                      ? 'ntk-nav-link active'
                      : 'ntk-nav-link'
                    }
                     onClick={(e)=>setCurrentPage(ROUTES.blog)}
                     to={ROUTES.blog}>Blog</Link>
                  </li>
                  <li className='ntk-nav-item'>
                    <Link className=
                    {
                      CurrentPage==ROUTES.contact
                      ? 'ntk-nav-link active'
                      : 'ntk-nav-link'
                    }
                     onClick={(e)=>setCurrentPage(ROUTES.contact)}
                    to={ROUTES.contact}>Contact</Link>
                  </li>
                </ul>
            </nav>
            
            <Routes>
                <Route path={ROUTES.home} element={<Home/>}></Route>
                <Route path={ROUTES.services} element={<Services/>}></Route>
                <Route path={ROUTES.projects} element={<Projects/>}></Route>
                <Route path={ROUTES.formation} element={<Formation/>}></Route>
                <Route path={ROUTES.blog} element={<Blog/>}></Route>
                <Route path={ROUTES.contact} element={<Contact/>}></Route>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
