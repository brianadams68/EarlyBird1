import { Document, Model, ObjectId } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  userId: ObjectId;
}

declare const User: Model<IUser>;
export default User;
