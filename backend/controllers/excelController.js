import Excel from "../models/excelModel.js";
import User from "../models/userModel.js";

export const addToExcel = async (req, res) => {
  try {
    const {
      email,
      followers,
      engagements,
      coursePrice,
      agencyFee,
      netRevenue,
    } = req.body;

    const data = await Excel.create({
      email,
      followers,
      engagements,
      coursePrice,
      agencyFee,
      netRevenue,
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const getExcel = async (req, res) => {
  try {
    const { user_id } = req.params;

    //Ensure only Admin can edit product
    const user = await User.findById(user_id);
    if (!user || !user.isAdmin) throw new Error("Forbidden");

    const data = await Excel.find({});

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
