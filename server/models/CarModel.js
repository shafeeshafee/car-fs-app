const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CarModel = new Schema(
	{
		model: { type: String, required: true },
		carType: { type: String, required: true },
		image: { type: String, required: true },
		brand: { type: Schema.Types.ObjectId, ref: "carBrands" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("carModels", CarModel);

// For Car Model, it must have, Name of model, type of car (SUV , Sedan etc..), link to picture of car, and a reference to the Car Brand.
