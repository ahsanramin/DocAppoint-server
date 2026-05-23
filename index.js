const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dns = require("dns");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { verify } = require("crypto");
const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");

dotenv.config();

dns.setDefaultResultOrder("ipv4first");

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.MONGODB_URI;



const JWKS = createRemoteJWKSet(
    new URL(`${process.env.CLIENT_URL}/api/auth/jwks`)
)




// ✅ Middleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


const logger = (req, res, next) => {
  console.log(`${req.method} | ${req.url} `)
  next();

}



const verifyToken = async (req, res, next) => {
  const authorization = req.headers.authorization || req.headers.Authorization;
  
  const token = authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing Token' });
  }

  try {
    const { payload } = await jwtVerify(token, JWKS);
    req.user = payload;
    
        next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid Token' });
  }
};



async function run() {
  try {
    // await client.connect();

    const db = client.db("DocAppoint");
    const doctorCollection = db.collection("doctors");
    const appointmentCollection = db.collection("appointments");
    const usersCollection = db.collection("updateUsers");


    // Get all doctors
    app.get("/doctors", async (req, res) => {