var Sequelize = require("sequelize");
var sequelize;

if (process.env.JAWSDB_URL) {
	sequelize = new Sequelize(process.env.JAWSDB_URL, {
		dialect: "mysql",
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
	})
}

else {
	sequelize = new Sequelize("therulessay", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
}
module.exports = sequelize;