import mongoose from 'mongoose';
import { DB_NAME } from '../src/constants.js'
import express from 'express';
import 'dotenv/config'

const connectDB = async () => {
    try {

       const connectionInstances= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`DB connected ${connectionInstances.connection.host}`);
    } catch (error) {
        console.log("error", error);
        process.exit(1);
    }
}

export default connectDB;