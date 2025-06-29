import connectToDatabase from "@/lib/dbConnect";
import User from "@/Model/user";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const { name, email, password } = await request.json();
    const newUser = new User({ name, email, password });
    await newUser.save();
    return NextResponse.json(
      {
        message: "User created successfully",
        user: { name: newUser.name, email: newUser.email },
      },

      { status: 201 }
    );
  } catch (err) {
    console.error("Error in POST request:", err);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
