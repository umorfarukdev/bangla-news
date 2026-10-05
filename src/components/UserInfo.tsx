"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const UserInfo = () => {
  const { data: session, isPending } = useSession();
  if (isPending) {
    return <span className="loading loading-spinner text-neutral"></span>;
  }
  const handleSignOut = async () => {
    await signOut();
    redirect("/")
  };

  return (
    <div>
      {session?.user ? (
        <>
          <div className="">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border-2 bg-blue-500"
              >
                <div className="w-20 rounded-full">
                  <Image
                    width={60}
                    height={60}
                    alt={session.user.name}
                    src={session.user.image as string}
                  />
                </div>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-blue-600 rounded-box z-1 mt-3 w-60 p-2 shadow"
              >
                <li className="text-white font-semibold">
                  <Link href={"/profile"}>Profile</Link>
                </li>
                <li className="text-white font-semibold">
                  {session.user.name}
                </li>
                <li className="text-white font-semibold">
                  {session.user.email}
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn bg-red-700 text-white font-bold text-xl"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div>
          <Link href="/signin" className="btn border-none">
            সাইন ইন
          </Link>
          <Link href="/signup" className="btn bg-red-500">
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
