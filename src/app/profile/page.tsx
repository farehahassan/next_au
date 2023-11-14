// import { Exo } from 'next/font/google'
"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const page = () => {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout Successfull");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data.name);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2>
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <hr />
      <br />
      <button
        onClick={logout}
        className="bg-blue-800 hover:bg-blue-400 text-white font-bold p-4 rounded"
      >
        LogOut
      </button>
      <br />
      <button
        onClick={getUserDetails}
        className="bg-orange-800 hover:bg-orange-400 text-white font-bold p-4 rounded"
      >
        GetUser Details{" "}
      </button>
    </div>
  );
};

export default page;
