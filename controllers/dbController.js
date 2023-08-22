const db = require('../dbModels/dbModels')

const Product = db.products;


const addProduct = async (req, res) => { 
    // const info = {
    //     title: title.req.body,
    //     description: description.req.body,
    //     price: price.req.body,
    //     published: published.req.body ? published.req.body : false
    // }
    const { name, email, password } = req.body;

    const product = await Product.create({name,
      email,
      password,
    });
    res.status(200).send(product);
}

const getallProducts = async(req, res) => {
    const product = await Product.findAll({});
    res.status(200).send(product);
}

const getProduct = async(req, res) => {
    const id = req.params.id;
    const product = await Product.findOne({where:{id:id}});
    res.status(200).send(product);
}

const updateProduct = async (req, res) => {
    const id = req.params.id;
    const product = await Product.update(req.body, { where: { id: id } });
    res.status(200).send(product);
}

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    await Product.destroy({ where: { id: id } });
    res.status(200).send("Deleted");
}
module.exports = { addProduct, getallProducts,getProduct,updateProduct, deleteProduct };