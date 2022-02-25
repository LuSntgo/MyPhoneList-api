import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const mongoClient = new MongoClient(process.env.MONGO_UR);
await mongoClient.connect();

const db = mongoClient.db("myList");
export default db;
