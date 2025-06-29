import connectToDatabase from "@/lib/dbConnect";
import User from "@/Model/user";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const { email } = await request.json();
    const user = await User.findOne({ email }).select("-password"); // Exclude password
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    console.error("Error in GETUSER request:", err);
    return NextResponse.json(
      { error: "Failed to fetch user data" },
      { status: 500 }
    );
  }
}
