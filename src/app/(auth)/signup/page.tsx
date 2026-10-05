"use client";

import { signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUp = () => {
  const handleSignUp = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
      email: string;
      password: string;
    };


    const { data, error } = await signUp.email({
      ...user,
      callbackURL: "/",
    });

    // const { data, error } = await signUp.email({
    //   name: user.name as string,
    //   image: user.image as string,
    //   email: user.email as string,
    //   password: user.password as string,
    //   callbackURL: "/",
    // });

    if (data) {

      redirect("/");
    }
    if (error) {

    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-base-200 px-4">
      <form className="w-full max-w-md" onSubmit={handleSignUp}>
        <fieldset className="fieldset bg-base-100 border border-base-300 rounded-2xl shadow-xl p-6">
          <legend className="fieldset-legend text-center text-3xl text-red-700 font-bold px-2">
            সাইন আপ
          </legend>

          <p className="text-sm text-base-content/60 mb-4">
            নতুন অ্যাকাউন্ট তৈরি করুন
          </p>

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

          <label className="label font-medium mt-3">ইমেইল</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
          />

          <label className="label font-medium mt-3">পাসওয়ার্ড</label>
          <input
            type="password"
            name="password"
            className="input input-bordered w-full"
            placeholder="Create a password"
          />

          <button
            type="submit"
            className="btn w-full mt-5 text-white bg-red-700 font-semibold"
          >
            সাইন আপ করুন
          </button>

          <p className="text-center text-sm text-base-content/60 mt-4">
            অ্যাকাউন্ট আছে?
            <a
              href="/signin"
              className="link link-info text-red-700 font-medium"
            >
              সাইন ইন করুন
            </a>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
