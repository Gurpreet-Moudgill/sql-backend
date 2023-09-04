const db = require('../dbModels/dbModels')
const Address = db.addresses;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { use } = require('../routes/authRoutes');

const createToken = (id) => {
  return jwt.sign({ id }, 'secret Key', {
    expiresIn: 3 * 24 * 60 * 60,

  })
}

const authenticateToken=(req, res, next)=> {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied.');

  jwt.verify(token, 'secret-key', (err, user) => {
    if (err) return res.status(403).send('Invalid token.');
    req.user = user;
    next();
  });
}

const getSignUp = (req, res) => {
  res.render('signup');
}
const getLogin = (req, res) => {
  res.render('login');
}
const postSignUp = async (req, res) => {
  const { username, password } = req.body;
  try {
    let pass =  await bcrypt.hash(password, 10);

    const address = await Address.create({ username, password: pass });
    address.save();
    const token = createToken(address.id);
    // res.cookie('jwt', token, { httpOnly: true })
    res.status(200).send({ address: address.id });
  }
  catch (err) {
    console.log(err);
    res.status(400).send('user not created,please fill all details')
  }
};

const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user =await Address.findOne({where:{username:username}});
  console.log(user);  
  if (!user) return res.status(400).send('User not found.');

  try{
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword) {
    return res.status(200).send('Success.');
  }

  const token =  jwt.sign({ username: user.username }, 'secret-key');
  res.send({ token })
}
catch(error){
    res.status(500).send('login Failed')
  }
}





module.exports = { getLogin, getSignUp, postLogin, postSignUp, authenticateToken }

