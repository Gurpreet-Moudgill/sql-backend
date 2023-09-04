const express = require('express');
const exphbs = require('express-handlebars')
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/authRoutes')
const cookies = require("cookie-parser")

app.use(cors(

));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

// routes
const router = require("./routes/dbRoutes");
const { getallProducts } = require('./controllers/dbController');
app.use(authRoutes);
app.use("/products", router);
app.get('/', getallProducts)
app.get('/create', (req, res) => {
    res.render('create');
})
app.use(authRoutes);



const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});
