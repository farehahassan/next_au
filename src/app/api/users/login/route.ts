import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
// import path from "path";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json("User not found", { status: 400 });
    } else {
      //check if pass is correct
      const validPassword = await bcryptjs.compare(password, user.password);

      if (!validPassword) {
        return NextResponse.json("Invalid Password", { status: 400 });
      }      
    }

    const tokenData = {
        id : user._id,
        username:user.username,
        email:user.email,
    }

    //create token
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1h" })
    const response = NextResponse.json({
        message: "Login Successful!",
        success: true,
    })
    response.cookies.set("token" , token , {httpOnly: true })

    return response;


  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
