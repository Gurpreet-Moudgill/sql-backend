const db = require('../dbModels/dbModels')

const Product = db.products;
const Address = db.addresses;

const ro = async (req, res) => {
  res.render('create')
}

const addProduct = async (req, res) => {
  const { name, email, phoneNo } = req.body;
  const product = await Product.create({ name, email, phoneNo });
  product.save();
  res.status(200).send(product);
  // res.redirect("/");
};

const getallProducts = async (req, res) => {
  const product = await Product.findAll({ raw: true });
  // res.status(200).send(product);
  // console.log(product,'products');
  res.status(200).render('home', { product: product });
};

const getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send("Deleted");
  // res.render('/');
};

//controller for address table

const addAddress = async (req, res) => {
  const { username, password } = req.body;

  const address = await Address.create({ username, password });
  address.save();
  res.status(200).send(address);
};

const getaddress = async (req, res) => {
  const address = await Address.findAll({});
  res.status(200).send(address);
};


// Associations
const onetoone = async (req, res) => {
  const data = await Product.findAll({
    include: [{ model: Address }],
    where: { id: 2 },
  });
  res.status(200).send(data);
};

const onetomany = async (req, res) => {
  const data = await Product.findAll({
    include: [{ model: Address }],
    where: { id: 3 },
  });
  res.status(200).send(data);
};

const belongsTo = async (req, res) => {
  const data = await Address.findAll({
    include: [{ model: Product }],
    where: { id: 2 },
  });
  res.status(200).send(data);
};
module.exports = {
  addProduct,
  getallProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  addAddress,
  getaddress,
  onetoone,
  belongsTo,
  onetomany,
  ro
};