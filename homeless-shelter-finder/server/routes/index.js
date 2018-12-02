const shelterRoutes = require("./shelters");
const path = require("path");

const constructorMethod = (app) => {

	app.use("/api", shelterRoutes);

	app.use("*", (req,res) => {
   res.sendFile(path.join(__dirname, '../../frontend/build/index.html')); 
	});
};

module.exports = constructorMethod
