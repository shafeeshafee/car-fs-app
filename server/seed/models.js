const db = require("../db");
const CarModel = require("../models/CarModel");

db.on("error", console.error.bind(console, "MongoDB failed to connect."));

const main = async () => {
	const models = [
		{
			model: "MDX",
			carType: "Manual",
			image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/2022_Acura_MDX_%28United_States%29_front_view_02.png",
			brand: "Acura",
		},
		{
			model: "Audi R8",
			carType: "Sedans",
			image:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/R8_Coupe_V10_performance-1.jpg/1920px-R8_Coupe_V10_performance-1.jpg",
			brand: "Audi",
		},
		{
			model: "Veloster",
			carType: "Sports",
			image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Hyundai_Veloster_%28JS%29_front_view_%28South_Korea%29.jpg",
			brand: "Hyundai",
		},
		{
			model: "Levante",
			carType: "SUV",
			image: "https://s7g10.scene7.com/is/image/maserati/maserati/international/Models/mc20/mc20-hero.jpg?$1920x2000$&fit=constrain",
			brand: "Maserati",
		},
		{
			model: "XC40",
			carType: "Convertible",
			image: "https://cimg0.ibsrv.net/ibimg/hgm/1920x1080-1/100/636/2019-volvo-xc40_100636104.jpg",
			brand: "Volvo",
		},
	];

	await CarModel.insertMany(models);
	console.log("Inserted models for cars.");
};

const run = async () => {
	await main();
	db.close();
};

run();
