const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://Admin_proyecto:1243@bd-proyecto-analisis.teeqfbj.mongodb.net/?retryWrites=true&w=majority"

/// 'mongodb+srv://Nachops:analisis@clusternazzio.rthiq1p.mongodb.net/'

const db = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URL);
        console.log("BD Conectada", conn.connection.host);
    }catch(error){
        console.log(error)
    }
};

module.exports = db;