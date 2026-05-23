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