"use client";
import { updateUser } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";

const UpdateUser = () => {
  const router = useRouter();
  const handleUpdate = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    const {data} = await updateUser({
      name: user.name,
      image: user.image,
    });

    console.log(data);
    router.push("/profile");
  };

  return (
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
  );
};

export default UpdateUser;
