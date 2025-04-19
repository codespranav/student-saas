// app/page.tsx
import BgGradient from "@/components/common/BgGradient";
import HomePage from "@/components/Home/landing-page";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="w-full relative">
      <BgGradient />
      <div>
        <HomePage />
      </div>
    </div>
  );
}
