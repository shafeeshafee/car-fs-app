const { Router } = require("express");
const controllers = require("../controllers/index.js");

const router = Router();

router.get("/", (req, res) => res.send("Root directory."));

router.get("/carBrands", controllers.getBrands);
router.get("/carBrands/:id", controllers.getBrandByID);
router.post("/carBrands", controllers.createBrand);
router.patch("/carBrands/:id", controllers.updateBrand);
router.delete("/carBrands/:id", controllers.deleteBrand);

module.exports = router;
