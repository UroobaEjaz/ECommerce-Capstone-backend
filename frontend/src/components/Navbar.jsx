import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/home/Home.jsx";

import About from "../pages/About/About.jsx";

const Navbar = () => {




  return (  
   // bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10 ----> used this as a reference to make the footer styling
    // used chatgpt to get the syntax on navbar url="build a simple navbar "


    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
     
    </Switch>
  </Router>


    {/* using router to navigate to the pages */}
   {/* <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10 "> 
      {/* searched on chat gpt for the tailwind and logo syntax url="https://chatgpt.com/c/a8500a72-5c40-4bb6-af94-9817af802cee"*/}

     {/* <Link to="/" className="">
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
    </nav> */}
  );
};

export default Navbar;
