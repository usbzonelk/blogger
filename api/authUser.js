const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

require("crypto").randomBytes(64).toString("hex");

dotenv.config();
process.env.TOKEN_SECRET;

const generateAccessToken = (username) => {
  console.log(username);
  const token = jwt.sign({ email: username }, process.env.TOKEN_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

const authenticateToken = (token) => {
  let retVal;
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      retVal = false;
    } else {
      retVal = user.email;
    }
  });
  return retVal;
};

module.exports.generateAccessToken = generateAccessToken;
module.exports.authenticateToken = authenticateToken;
