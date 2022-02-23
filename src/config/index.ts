require('dotenv').config();

export default {
    port: parseInt(process.env.PORT) || 5050,
    databaseURL: process.env.MONGODB_URI
}