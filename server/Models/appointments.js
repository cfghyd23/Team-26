import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema(
    {
      date: {
        type: Date,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      donor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donor",
        required: true,
      },
      bloodBank: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BloodBank",
        required: true,
      },
    },
    { timestamps: true }
  );

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;

