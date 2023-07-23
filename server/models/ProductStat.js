import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlySalesSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    // description: String,
    // category: String,
    // rating: Number,
    // supply: Number,
  },
  {
    timestamps: true,
  }
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;
