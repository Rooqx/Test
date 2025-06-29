import connectToDatabase from "@/lib/dbConnect";
import User from "@/Model/user";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const { email, password } = await request.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.password !== password) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        message: "Login successful",
        user: { name: user.name, email: user.email },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error in LOGIN request:", err);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
