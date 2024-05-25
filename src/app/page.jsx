import { auth } from "@/auth";
import { HomeContent, SignOut } from "@/components";
import { redirect } from "next/navigation";

export default async function Home() {
  // server side auth
  const session = await auth();
  const user = session?.user;
  if (!user) redirect("/auth");

  return (
    <>
      <main>
        <HomeContent />
        <SignOut />
      </main>
    </>
  );
}
