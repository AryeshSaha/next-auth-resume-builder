"use client"
import { signOut } from "next-auth/react";
import { PiSignOutBold } from "react-icons/pi";
const SignOut = () => {
  return (
    <>
      <button
        onClick={() => signOut()}
        className="flex items-center justify-between px-4 py-3 duration-150 border-2 rounded-md cursor-pointer border-cyan-500 group hover:bg-cyan-700 hover:border-cyan-700 hover:shadow-md active:scale-95"
      >
        <PiSignOutBold className="w-6 h-6 text-cyan-500 group-hover:text-white" />
        <p className="ml-2 text-sm font-semibold text-cyan-500 group-hover:text-white">
          Sign Out
        </p>
      </button>
    </>
  );
};

export default SignOut;
