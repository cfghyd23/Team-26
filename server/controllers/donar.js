import Donor from "../Models/donor.js";

/* READ */
export const getDonor = async (req, res) => {
  try {
    const { id } = req.params;
    const donor = await Donor.findById(id);
    res.status(200).json(donor);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const updateDonationCount = async (req, res) => {
  try {
    const { id } = req.params;
    const donor = await Donor.findById(id);

    // Increment the donation count
    donor.totalDonations += 1;

    await donor.save();

    res.status(200).json(donor);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const addAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, time, bloodBank } = req.body;

    const donor = await Donor.findById(id);

    // Create a new appointment
    const newAppointment = {
      date,
      time,
      bloodBank,
    };

    // Add the appointment to the donor's appointments array
    donor.appointments.push(newAppointment);

    await donor.save();

    res.status(201).json(donor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
