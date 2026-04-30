'use client'
import { authClient } from "../../lib/auth-client";
import { Avatar } from "@heroui/react";

export default function Profile() {
     const Datause = authClient.useSession();
     const user = Datause?.data?.user ;
     console.log(user)

  return (
    <div className="card border-2 border-gray-400 w-md mx-auto my-6 p-5 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">My Profile</h1>
         <Avatar>
                <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
          </Avatar>
          <p className="font-bold">{user?.name}</p>
          <p className="text-gray-400">{user?.email}</p>
    </div>
  )
}
