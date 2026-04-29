import app from "./server.js";
import mongodb from "mongodb";
//import ReviewsDAO from "/dao/reviewsDAO.js";
import dotenv from "dotenv";

dotenv.config();

const MongoClient = mongodb.MongoClient;  // Create a new MongoClient instance to connect to the MongoDB server
const mongo_username = process.env['MONGO_USERNAME']
const mongo_password = process.env['MONGO_PASSWORD']
const uri = `mongodb://${mongo_username}:${mongo_password}@ac-2sf4kkq-shard-00-00.gonp0ge.mongodb.net:27017,ac-2sf4kkq-shard-00-01.gonp0ge.mongodb.net:27017,ac-2sf4kkq-shard-00-02.gonp0ge.mongodb.net:27017/?ssl=true&replicaSet=atlas-aco8a3-shard-0&authSource=admin&appName=Cluster1`

const port = 8000;

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50, // Maintain up to 50 socket connections
        wtimeoutMS:2500, // Close sockets after 2500ms of inactivity
    }
).catch(err => {
    console.error(err.stack); // Log any errors that occur during the connection attempt
    process.exit(1); // Exit the process with a failure code
}).then(
    async client => {
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        })
    }
)