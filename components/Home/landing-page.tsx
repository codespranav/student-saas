import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function HomePage() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-white">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to NoteWave</h1>
      <Link
        href="/sign-in"
        className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition text-lg font-medium"
      >
        Sign In
      </Link>
    </main>
  );
}
