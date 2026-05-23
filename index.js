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