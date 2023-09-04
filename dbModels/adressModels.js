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

//   Address.beforeCreate((user, options) => {

//     return bcrypt.hash(user.password, 10)
//         .then(hash => {
//             user.password = hash;
//         })
//         .catch(err => { 
//             throw new Error(); 
//         });
// });

// Address.beforeCreate((user, options) => {

//   return bcrypt.hash(user.username, 10)
//       .then(hash => {
//           user.username = hash;
//       })
//       .catch(err => { 
//           throw new Error(); 
//       });
// });

// Address.login = async function(username, password){
//   const user = await this.findOne({username});
//   if(user){
//     const auth = await bcrypt.compare(password, user.password);
//     if(auth){
//       return user;
//     }throw Error("Incorrect Password")
//   }
//   throw Error('Incorrect Username')
// }
  return Address;
};
