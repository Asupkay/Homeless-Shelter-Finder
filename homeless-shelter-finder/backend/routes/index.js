const shelterRoutes = require("./shelters");

const constructorMethod = (app) => {

	app.use("/api", shelterRoutes);

	app.use("*", (req,res) => {
		res.status(404).json({error: "Not Found!"});
	});
};

module.exports = constructorMethod