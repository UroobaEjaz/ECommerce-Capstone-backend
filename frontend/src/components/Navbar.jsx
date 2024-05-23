import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
 

<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home.jsx";

import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Login from "../pages/login/Login.jsx";
=======

>>>>>>> f5a58e814ebff4ed181db8a75d9cebad89545fae

const Navbar = () => {
  return (
    // bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10 ----> used this as a reference to make the footer styling
    // used chatgpt to get the syntax on navbar url="build a simple navbar "

<<<<<<< HEAD
    <Routes>
=======
/*
    <Router>
    <Switch>
>>>>>>> f5a58e814ebff4ed181db8a75d9cebad89545fae
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
<<<<<<< HEAD
    </Routes>

    // {/* using router to navigate to the pages */}
    //  {/* <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10 ">
    //     {/* searched on chat gpt for the tailwind and logo syntax url="https://chatgpt.com/c/a8500a72-5c40-4bb6-af94-9817af802cee"*/}

    //    {/* <Link to="/" className="">
    //       <img src="/logo.jpg" alt="Logo " className="w-12 rounded-full" />
    //     </Link>
    //     <ul className="flex space-x-4">
    //       <li>
    //         <Link to="/" className="text-gray-600 hover:text-blue-600">
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="pages/About" className="text-gray-600 hover:text-blue-600">
    //           About
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/contact" className="text-gray-600 hover:text-blue-600">
    //           Contact
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/login" className="text-gray-600 hover:text-blue-600">
    //           Login
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/cart">
    //           <BiCart className="text-gray-600 hover:text-blue-600 text-2xl" />
    //         </Link>
    //       </li>
    // </ul>
    //   </nav> */}
=======
     
    </Switch>
  </Router> 
  
  
  Reference for using router: https://chatgpt.com/c/cec6a917-8d3e-444f-a498-a6ad0c5706cb*/

    
      /* searched on chat gpt for the tailwind and logo syntax url="https://chatgpt.com/c/a8500a72-5c40-4bb6-af94-9817af802cee"*/
/*<nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10 "> 
      <Link to="/" className="">
        <img src="/logo.jpg" alt="Logo " className="w-12 rounded-full" />
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="pages/About" className="text-gray-600 hover:text-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/login" className="text-gray-600 hover:text-blue-600">
            Login
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <BiCart className="text-gray-600 hover:text-blue-600 text-2xl" />
          </Link>
        </li>
  </ul>
    </nav>*/
    
   /* searched on chat gpt for the tailwind and logo syntax url="https://chatgpt.com/c/a8500a72-5c40-4bb6-af94-9817af802cee"*/
<nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10 "> 

      <Link to="/" className="">
       
        <img src="/logo.jpg" alt="Logo " className="w-12 rounded-full" />
      
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="pages/About" className="text-gray-600 hover:text-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/login" className="text-gray-600 hover:text-blue-600">
            Login
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <BiCart className="text-gray-600 hover:text-blue-600 text-2xl" />
          </Link>
        </li>
  </ul>
    </nav> 



   
>>>>>>> f5a58e814ebff4ed181db8a75d9cebad89545fae
  );
};

export default Navbar;
