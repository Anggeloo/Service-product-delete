const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const swaggerDocs = require('./config/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const productRoutes = require('./routes/productRoutes');

app.use('/products', productRoutes);

swaggerDocs(app);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
