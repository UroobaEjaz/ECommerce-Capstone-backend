import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../assets/demoLogo.jpg";
import { useAuthContext } from "../context/AuthContext"

/*

const Navbar = ({ size }) => {
  return ( */
    // bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10 ----> used this as a reference to make the footer styling
    // used chatgpt to get the syntax on navbar url="build a simple navbar "
    // Reference for using router: https://chatgpt.com/c/cec6a917-8d3e-444f-a498-a6ad0c5706cb*/
    /* searched on chat gpt for the tailwind and logo syntax url="https://chatgpt.com/c/a8500a72-5c40-4bb6-af94-9817af802cee"*/
/*
    <nav className="bg-white shadow-md p-4 flex justify-between top-0 left-0 z-10 fixed items-center w-full font-bold">
      <Link to="/" className="p-3">
        <img src="/logo.jpg" alt="Logo " className="w-10 rounded-full" />
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className="text-black-600 font-large hover:text-red-600 p-3"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Products"
            className="text-black-600 font-large hover:text-red-600 p-3"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            className="text-black-600 font-large hover:text-red-600 p-3"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className="text-black-600 font-large hover:text-red-600 p-3 mt-2"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/Login"
            className="text-black-600 font-large hover:text-red-600 p-3"
          >
            Login
          </Link>
        </li>
        <li>
          <Link to="/Cart" className="py-6">
            <BiCart className="text-black-600 font-large hover:text-red-600 text-2xl" />
            <span className="mt-8 mr-1 absolute -top-1 -right-0 text-xs text-white bg-red-600 rounded-full px-2 py-1">
              {size}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
 */


/**
 * v0 by Vercel.
 * 
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YRfjHfJmHxO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UpIqW8vslPn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"

{/*bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10 */}

{/*flex h-20 bg-black w-full top-0 items-center justify-between bg-primary text-white px-0 py-0 md:px-6 shadow-sm*/}
export default function Navbar() {

  // implement the user context


  const { authUser } = useAuthContext(); 
  return ( 
    <header className="bg-red-900 p-5 flex justify-between items-center fixed top-0 left-0 w-full z-10  ">
      <Link href="#" className="flex items-center" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">JK Convenience</span>
      </Link>
      <nav className="hidden lg:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-20">
            <NavigationMenuLink asChild>
            <Link
            to="/"
            className=" font-medium transition-colors hover:underline hover:underline-offset-4 text-white text-xl"
            prefetch={false}
          >
            Home
          </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
             
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
            <Link
            to="/Products"
            className=" font-medium transition-colors hover:underline hover:underline-offset-4 text-white text-xl" 
            prefetch={false}  
          >
            Products
          </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
             
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
            <Link
            to="/About"
            className="font-medium transition-colors hover:underline hover:underline-offset-4 text-white  text-xl"
            prefetch={false}
          >
            About
          </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
     <DropdownMenu>
      <DropdownMenuTrigger asChild>
       <Avatar className="h-9 w-9">
          {authUser ? (
            <>
              {authUser.profilePicture ? (
                <AvatarImage src={authUser.profilePicture} alt="Profile" className="profile-pic" />
              ) : (
                <div className="default-profile-pic">Initials or Icon</div>
              )}
              <AvatarFallback>{authUser.firstname}</AvatarFallback>
            </>
          ) : (
            <Link to="/login" className="text-white">Login</Link>
          )} 
        </Avatar>
        </DropdownMenuTrigger>  
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem className="text-black">My Account</DropdownMenuItem>
          <DropdownMenuItem className="text-black">Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-black">Logout</DropdownMenuItem>
        </DropdownMenuContent>
     </DropdownMenu>   
    </header>
  )
}

function MountainIcon(props) {
  return (
    /*
<svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <image href= {logo}/>
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg> */

    // at this place image is supposed to be inserted
    <img src={logo} alt="Logo" className="w-10 rounded-full" />
  )

  // install radix-ui to run this

}