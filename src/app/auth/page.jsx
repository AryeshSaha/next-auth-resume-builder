import { GoogleSignIn } from "@/components";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col p-8 text-center rounded-md bg-zinc-50 text-surface/75 dark:bg-neutral-700 dark:text-white/75">
          <h1 className="text-3xl font-bold text-white">
            Welcome to Resumaders
          </h1>
          <p className="text-sm text-zinc-300">Building Resumes with ease.</p>
          <h3 className="text-xl font-semibold text-zinc-300">
            Authentication
          </h3>
          <div className="flex flex-col items-center justify-start w-full gap-6 p-2 rounded-md lg:w-96">
            <GoogleSignIn />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
