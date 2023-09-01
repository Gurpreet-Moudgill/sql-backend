// const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNo: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
      },
    });
    return Product;
}