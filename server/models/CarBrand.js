const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CarBrand = new Schema(
	{
		title: { type: String, required: true },
		origin: { type: String, required: true },
		url: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("carBrands", CarBrand);

// For the Car Brand, it must have , Title, Country of Origin, and website link.
