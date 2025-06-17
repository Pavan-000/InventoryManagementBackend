// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Inventory API',
      version: '1.0.0',
      description: 'API documentation for the Inventory Management System',
    },
    servers: [
      {
        url: 'https://inventorymanagement-eeqg.onrender.com', // Change based on your local/server URL
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API docs (adjust to your folder structure)
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;