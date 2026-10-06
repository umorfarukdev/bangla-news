"use client";

import Github from "@/components/Github";
import Google from "@/components/Google";
import { signIn } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";

const SignIn = () => {
  const handleSignIn = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    // const { data, error } = await signIn.email({
    //   ...user,
    //   callbackURL: "/",
    // });

    const { data, error } = await signIn.email({
      email: user.email,
      password: user.password,
      callbackURL: "/",
    });

    if (data) {
      redirect("/");
    }
    if (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="min-h-screen flex justify-center bg-base-200 px-4">
      <div className="w-full max-w-lg">
        {/* Sign In Form */}
        <form onSubmit={handleSignIn} className="w-full">
          <fieldset className="fieldset bg-base-100 border border-base-300 rounded-2xl shadow-xl p-6">
            <legend className="fieldset-legend text-3xl text-rose-700 font-bold px-2">
              সাইন ইন
            </legend>

            <p className="text-sm text-base-content/60 mb-4">
              আপনার অ্যাকাউন্টে লগইন করুন
            </p>

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
              placeholder="Enter your password"
            />

            <div className="flex justify-end mt-2">
              <a href="#" className="link link-info text-red-700 text-sm">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="btn w-full mt-5 text-white bg-red-700 font-semibold"
            >
              সাইন ইন করুন
            </button>

            <p className="text-center text-sm text-base-content/60 mt-4">
              অ্যাকাউন্ট নেই?{" "}
              <a
                href="/signup"
                className="link link-info text-red-700 font-medium"
              >
                সাইন আপ করুন
              </a>
            </p>
          </fieldset>
        </form>

        {/* Divider */}
        <div className="divider">অথবা</div>

        {/* Google */}
        <div className="w-full">
          <Google />
        </div>

        {/* Divider */}
        <div className="divider">অথবা</div>

        {/* Github */}
        <div className="w-full">
          <Github />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
