"use client";
import Link from "next/link";
import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const page = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  
  });
  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl p-5">Login</h1>
      <hr />

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
      onClick={onLogin}
      className="p-2 px-5 border border-gray-300 rounded-lg mb-4 hover:bg-white hover:text-black"
      >
        Login
      </button>
      <Link href={"/signup"}>Visit signup page</Link>
    </div>
  );
};

export default page;
