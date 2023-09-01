const db = require('../dbModels/dbModels')
const Address = db.addresses;

const getSignUp = (req, res) => {
    res.render('signup');
}
const getLogin = (req, res) => {
    res.render('login');
}
const postSignUp = async(req, res) => {
        const { username, password } = req.body;
      try{
        const address = await Address.create({ username, password });
        address.save();
        res.status(200).send(address);
      }
      catch(err){
        console.log(err);
        res.status(400).send('user not created,please fill all details')
      }
      };
//     res.send('new signup');
// }
const postLogin = (req, res) => {
    res.send('new login');
}

module.exports = { getLogin, getSignUp, postLogin, postSignUp }

