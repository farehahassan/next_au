"use client";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast/headless";
import { Router } from "next/router";

const page = () => {
  const router= useRouter();
  const [buttonDisabled , setButtonDisabled]=React.useState(false)
  const [loading , setLoading]=React.useState(false);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  
  });
  const onLogin = async () => {
try {
  setLoading(true);
 const response =  await axios.post("/api/users/login" , user)
 console.log("Login success" , response.data);
//  toast.success("Login success");
 router.push("/profile");


} catch (error:any) {
  console.log("Login failed", error.message);
  toast.error(error.message)
} finally {
  setLoading(false);
}
  };

  useEffect(()=>{
    if(user.email.length>0 && user.password.length>0 ){
      setButtonDisabled(false);
    }else{
      setButtonDisabled(true);
    }
    
  } , [user])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl p-5">{loading ? "processing" : "Login"}</h1>
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
