"use client";
import Link from "next/link";
import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const page = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl p-5">Sign Up</h1>
      <hr />

      {/* USERNAME */}
      <label htmlFor="username">Username</label>
      <input
      className="p-2 mb-4 text-black"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      {/* EMAIL */}

      <label htmlFor="email">Email</label>
      <input
      className="p-2 mb-4 text-black"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      {/* PASSWORD */}
      <label htmlFor="password">Password</label>
      <input
      className="p-2 mb-4 text-black"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
      onClick={onSignup}
      className="p-2 px-5 border border-gray-300 rounded-lg mb-4 hover:bg-white hover:text-black"
      >
        SignUp
      </button>
      <Link href={"/login"}>Visit login page</Link>
    </div>
  );
};

export default page;
