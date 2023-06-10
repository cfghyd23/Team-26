import BloodBank from "../Models/bloodBank.js";

/* READ */
export const getBloodBank = async (req, res) => {
  try {
    const { id } = req.params;
    const bloodBank = await BloodBank.findById(id);
    res.status(200).json(bloodBank);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getBloodBanks = async (req, res) => {
  try {
    const bloodBanks = await BloodBank.find();
    res.status(200).json(bloodBanks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
