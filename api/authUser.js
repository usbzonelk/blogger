const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

require("crypto").randomBytes(64).toString("hex");

dotenv.config();
process.env.TOKEN_SECRET;

const generateAccessToken = (username) => {

  process.env.TOKEN_SECRET = jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "7d" });
  return process.env.TOKEN_SECRET;
};

const authenticateToken = (token) => {


  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    return user;

    
  });
};

module.exports.generateAccessToken = generateAccessToken
module.exports.authenticateToken = authenticateToken
