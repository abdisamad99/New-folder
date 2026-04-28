const mongoose = require('mongoose');
const dns = require('dns');
dns.setServers([ '1.1.1.1'])
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("MongoDB Connected ✅");
    } catch (error) {
        console.error("DB Connection Error ❌", error.message);
    }
};

module.exports = { connectToDatabase };
