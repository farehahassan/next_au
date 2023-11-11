"use client";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
// import { Router } from "next/router";

const page = () => {
  const router = useRouter(); 
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled , setButtonDisabled]=React.useState(false)
  const onSignup = async () => {
    try {
      setLoading(true);
     const response= await axios.post("/api/users/signup" , user);
     console.log("signup success " , response.data);
     router.push("/login");


    } catch (error:any) {
      console.log("signup failed", error.message);
      toast.error(error.message);
    }finally{
setLoading(false)
    }
  };

  const [loading , setLoading]=React.useState(false);


  useEffect(()=>{
    if(user.email.length>0 && user.password.length>0 && user.username.length>0){
      setButtonDisabled(false);
    }else{
      setButtonDisabled(true);
    }
    
  } , [user])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl p-5"> {loading? "processing" :"signup"}</h1>
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
        {buttonDisabled ?"no Signup" : "sign up"}
      </button>
      <Link href={"/login"}>Visit login page</Link>
    </div>
  );
};

export default page;
