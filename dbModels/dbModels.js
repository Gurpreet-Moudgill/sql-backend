const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../dbConfig/dbConfig");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.products = require("./productModels")(sequelize, DataTypes);
db.addresses = require("./adressModels")(sequelize, DataTypes);

// Associations

// db.products.hasOne(db.addresses, { foreignKey: "id"});
// db.products.hasMany(db.addresses, { foreignKey: "user_id" });
// db.addresses.belongsTo(db.products, { foreignKey: "user_id" });

db.sequelize.sync({ alter: true }).then(() => {
  console.log("Synced");
});

module.exports = db;
