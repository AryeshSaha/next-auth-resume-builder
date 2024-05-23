import { signIn } from "@/auth";
import { FaGoogle, FaChevronRight } from "react-icons/fa6";

const GoogleSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        type="submit"
        className="flex items-center justify-between w-full px-4 py-3 duration-150 border-2 rounded-md cursor-pointer border-cyan-500 group hover:bg-cyan-700 hover:border-cyan-700 hover:shadow-md active:scale-95"
      >
        <FaGoogle className="w-6 h-6 text-cyan-500 group-hover:text-white" />
        <p className="ml-2 text-sm font-semibold text-cyan-500 group-hover:text-white">
          Sign In with Google
        </p>
        <FaChevronRight className="w-4 h-4 text-cyan-500 group-hover:text-white" />
      </button>
    </form>
  );
};

export default GoogleSignIn;
