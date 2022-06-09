import mongoose from "mongoose";

mongoose.connect("mongodb+srv://vinicola:vinicola@cluster0.kwqiz.mongodb.net/?retryWrites=true&w=majority");


let db = mongoose.connection;

export default db;