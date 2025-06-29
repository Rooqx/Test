import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  expenses: number;
  savings: number;
  total: number;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  expenses: { type: Number, default: 20000 },
  savings: { type: Number, default: 500 },
  total: { type: Number, default: 10000 },
  createdAt: { type: Date, default: Date.now },
});

const User = model<IUser>("User", userSchema);
export default User;
