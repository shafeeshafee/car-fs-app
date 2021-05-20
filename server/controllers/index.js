const carBrands = require("../models/CarBrand");

const createBrand = async (req, res) => {
	try {
		const brand = new carBrands(req.body);
		await brand.save();
		return res.status(200).json({
			brand,
		});
	} catch (err) {
		return res.status(500).json({ error: err.message });
	}
};

const getBrands = async (req, res) => {
	try {
		const brands = await carBrands.find();
		return res.status(200).json({ brands });
	} catch (err) {
		return res.status(500).json({ error: err.message });
	}
};

const getBrandByID = async (req, res) => {
	const { id } = req.params;
	try {
		const brand = await carBrands.findById(id);

		if (brand) {
			return res.status(200).json(brand);
		}

		return res.status(404).send("Car brand not found.");
	} catch (err) {
		return res.status(500).send("There was an error retrieving the information requested.");
	}
};

const updateBrand = async (req, res) => {
	const { id } = req.params;
	try {
		const brand = await carBrands.findByIdAndUpdate(id, req.body, { new: true }, (err, item) => {
			if (err) return res.status(500).send(error);
			if (!item) return res.status(500).send("Car brand not found.");
			return res.status(200).json(item);
		});
	} catch (err) {
		return res.status(500).send(err.message);
	}
};

const deleteBrand = async (req, res) => {
	const { id } = req.params;
	try {
		const toDelete = await carBrands.findByIdAndDelete(id);

		if (toDelete) {
			return res.status(200).send("Brand successfully removed.");
		} else {
			throw new Error("Car brand not found.");
		}
	} catch (err) {
		return res.status(500).send(err.message);
	}
};

module.exports = {
	createBrand,
	getBrands,
	getBrandByID,
	updateBrand,
	deleteBrand,
};
