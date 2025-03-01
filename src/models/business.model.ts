import mongoose, { Schema, model, Document, Types } from "mongoose";

interface IContactInfo {
  address: string;
  openAt: String;
  closeAt: String;
  phoneNumber: string;
  websiteLink: string;
}

export interface IBusiness extends Document {
  name: string;
  image: string;
  description: string;
  category: string;
  contactInfo: IContactInfo;
  rating: number;
}

const categorySchema = new Schema<string[]>();

const contactInfoSchema = new Schema<IContactInfo>(
  {
    address: { type: String, required: true },
    openAt: { type: String, required: true },
    closeAt: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    websiteLink: { type: String, required: true },
  },
  {
    _id: false,
  }
);

const businessSchema = new Schema<IBusiness>({
  name: { type: String, required: true, unique: true },
  image: { type: String },
  description: { type: String, required: true },
  category: { type: String, required: true },
  contactInfo: { type: contactInfoSchema, required: true },
  rating: { type: Number, required: true, default: 0 },
});

const Business = model<IBusiness>("Business", businessSchema);
export default Business;
