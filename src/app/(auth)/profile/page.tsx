"use client";

import { updateUser, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Profile = () => {
  const [show, setShow] = useState(false);
  const { data: session, isPending } = useSession();
  if (isPending) {
    return <span className="loading loading-spinner text-neutral"></span>;
  }

  const handleUpdate = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    await updateUser({
      name: user.name,
      image: user.image,
    });
  };

  const handleShowForm = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="container flex justify-center mx-auto">
        <div className="text-center mx-auto space-y-5">
          <div className="flex justify-center ">
            <Image
              className="rounded-full"
              width={100}
              height={100}
              src={session?.user.image as string}
              alt={session?.user.name as string}
            ></Image>
          </div>
          <div className=" space-y-7 text-2xl">
            <h2 className=" font-semibold">{session?.user.name}</h2>
            <h3 className=" font-semibold">{session?.user.email}</h3>
            <button className="btn btn-primary" onClick={handleShowForm}>
              Edit Profile
            </button>
            {/* <Link className="btn btn-info" href={"/updateuser"}>
              Upadate User
            </Link>{" "} */}
            <br />
            <Link className="btn btn-primary" href={"/"}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {show && (
        <div className="flex justify-center">
          <form className="w-full max-w-md" onSubmit={handleUpdate}>
            <fieldset className="fieldset bg-base-100 border border-base-300 rounded-2xl shadow-xl p-6">
              <legend className="fieldset-legend text-center text-3xl text-red-700 font-bold px-2">
                Update
              </legend>

              <label className="label font-medium">নাম</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Enter your name"
              />

              <label className="label font-medium mt-3">Image</label>
              <input
                type="url"
                name="image"
                className="input input-bordered w-full"
                placeholder="Enter your image URL"
              />

              <button
                type="submit"
                className="btn w-full mt-5 text-white bg-red-700 font-semibold"
              >
                Update
              </button>
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
