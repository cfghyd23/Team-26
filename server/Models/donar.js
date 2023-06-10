import mongoose from "mongoose";

const donorSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    bloodType: {
      type: String,
      required: true,
    },
    totalDonations: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Donor = mongoose.model("Donor", donorSchema);
export default Donor;