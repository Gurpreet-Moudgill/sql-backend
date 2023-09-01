const bcrypt = require("bcrypt")

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define("address", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Address.beforeCreate((user, options) => {

    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
});

  return Address;
};
