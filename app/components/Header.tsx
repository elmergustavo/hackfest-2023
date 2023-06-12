'use client'
import { signIn } from "next-auth/react";


export default function Header() {
    return (

        <>
          <main className="flex justify-between items-center my-[17px]  ">
            <p className="font-bold ">
                Colitas logo
            </p>

            <button
            onClick={() => signIn("google", {callbackUrl: '/matches'})}
            className="p-3 rounded-md  bg-primary text-white">
                Empecemos
            </button>
        </main>

        <hr className="  bg-gray-100 border-2 rounded  dark:bg-gray-700" />
        
        </>
      
    )
}
