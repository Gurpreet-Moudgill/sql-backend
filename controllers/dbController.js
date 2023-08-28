const db = require('../dbModels/dbModels')

const Product = db.products;
const Address = db.addresses;

const addProduct = async (req, res) => {
  // const info = {
  //     title: title.req.body,
  //     description: description.req.body,
  //     price: price.req.body,
  //     published: published.req.body ? published.req.body : false
  // }
  const { name, email, password, user_id } = req.body;

  const product = await Product.create({ name, email, password, user_id });
  res.status(200).send(product);
};

const getallProducts = async (req, res) => {
  const product = await Product.findAll({});
  res.status(200).send(product);
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

// const deleteProduct = async (req, res) => {
//   const id = req.params.id;
//   await Product.destroy({ where: { id: id } });
//   res.status(200).send("Deleted");
// };

//controller for address table
const addAddress = async (req, res) => {
  const { city, state, user_id } = req.body;

  const address = await Address.create({ city, state, user_id });
  res.status(200).send(address);
};

const getaddress = async (req, res) => {
  const address = await Address.findAll({});
  res.status(200).send(address);
};

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
  updateProduct,
  addAddress,
  getaddress,
  onetoone,
  belongsTo,
  onetomany,
};