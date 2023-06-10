import mongoose from "mongoose";

const bloodBankSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bloodTypes: [
      {
        type: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true }
);

const BloodBank = mongoose.model("BloodBank", bloodBankSchema);

export default BloodBank;
