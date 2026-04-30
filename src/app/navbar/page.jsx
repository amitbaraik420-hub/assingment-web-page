'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { authClient } from "../lib/auth-client"
import {Avatar} from "@heroui/react";
import { Button } from "@heroui/react";

export default function Navbar() {
 
  const handeSignOut = async() => {
     await authClient.signOut();
  }

  const Datause = authClient.useSession();
  const user = Datause?.data?.user ;
  // console.log(user)

  const pathname = usePathname()
   const Links = (
    <div className="flex flex-col lg:flex-row gap-4">
      <Link href="/" className={pathname === "/" ? "text-purple-400" : ""}>Home</Link>
      <Link href="/courses" className={pathname === "/courses" ? "text-purple-400" : ""}>Courses</Link>
      <Link href="/profile" className={pathname === "/profile" ? "text-purple-400" : ""}>My profile</Link>
    </div>
   )
  return (
   
  <div className="navbar bg-base-100 shadow-sm flex justify-between items-center">
  <div className="navbar-center ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {Links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><span className="text-purple-400">Skill</span>phere</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {Links}
    </ul>
  </div>
    
      {!user && (
        <div className="navbar-center gap-3">
          <Link href="/signin">
            <p className='font-bold text-red-500'>SignIn</p>
          </Link>
          <Link href="/signup">
            <p className='font-bold'>SignUp</p>
          </Link>
        </div>
      )}
     

       {user && ( 
        <div className="flex gap-3">
           <Avatar>
        <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
           </Avatar>
          <Button variant="danger" onClick={handeSignOut}>
            Signout
          </Button>
        </div>
      )}
       
    </div>
  )
}

