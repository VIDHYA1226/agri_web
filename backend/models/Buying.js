import mongoose from "mongoose";

const buyingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    userEmail: {
      type: String,
    }, 
    title:{
      type:String,
    },
    agriName:{
      type: String,
    },
    fullName: {
      type: String,
      required: true,
    },
    count:{
        type: Number,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    AddCart:{
        type: Date,
        required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Buying", buyingSchema);
