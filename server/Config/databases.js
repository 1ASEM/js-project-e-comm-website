const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is loaded
const mongoURI = process.env.MONGODB_URI;
exports.dbconnect = () => {
    

    if (!mongoURI) {
        console.error("MONGODB_URL is not defined. Check your .env file.");
        process.exit(1);
    }

    mongoose.connect(mongoURI)
        .then(() => console.log("DB connected successfully"))
        .catch(error => {
            console.error("DB connection failed", error);
            process.exit(1);
        });
};
