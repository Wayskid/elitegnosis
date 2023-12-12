import mongoose from "mongoose";

const excelSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    followers: {
      type: Number,
      require: true,
    },
    engagements: {
      type: Number,
      require: true,
    },
    coursePrice: {
      type: Number,
      require: true,
    },
    agencyFee: {
      type: Number,
      require: true,
    },
    netRevenue: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Excel = mongoose.model("Excel", excelSchema);

export default Excel;
