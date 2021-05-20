const db = require("../db");
const CarBrand = require("../models/CarBrand");

db.on("error", console.error.bind(console, "MongoDB failed to connect."));

const main = async () => {
	const brands = [
		{
			title: "Acura",
			origin: "Japan",
			url: "https://www.acura.com/",
		},
		{
			title: "Audi",
			origin: "Germany",
			url: "https://www.audiusa.com/us/web/en.html",
		},
		{
			title: "Hyundai",
			origin: "South Korea",
			url: "https://www.acura.com/",
		},
		{
			title: "Maserati",
			origin: "Italy",
			url: "https://www.maseratiusa.com/us/en",
		},
		{
			title: "Volvo",
			origin: "Sweden",
			url: "https://www.volvocars.com/us",
		},
	];

	await CarBrand.insertMany(brands);
	console.log("Created car brands!");
};

const run = async () => {
	await main();
	db.close();
};

run();
