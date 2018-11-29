const shelterRoutes = require("./shelters");
const path = require("path");

const constructorMethod = (app) => {

	app.use("/api", shelterRoutes);

	app.use("*", (req,res) => {
		res.status(404).json({ message: 'Not a valid route' });
	});
};

module.exports = constructorMethod
