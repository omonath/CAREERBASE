import { getUser } from "@workos-inc/authkit-nextjs";
import Link from "next/link";

export default async function Header() {
  const { user } = await getUser();
  return (
    <header className="w-full px-5 flex justify-center items-center shadow-md h-16 bg-white sticky top-0 z-10">
      <div className="container  flex items-center justify-between ">
        <Link href="/" className="text-xl font-bold no-underline">
          Career Base
        </Link>

        <nav className="flex gap-2 *:py-2 *:px-4 *:rounded-md ">
          <Link href="/login" className="bg-gray-200">
            Login
          </Link>

          <Link href="/new-job" className=" bg-blue-600 text-white">
            Post a Job
          </Link>
        </nav>
      </div>
    </header>
  );
}
