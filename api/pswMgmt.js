const bcrypt = require("bcrypt");

const saltRounds = 10;
let passwd = "";
let salt = "";

const passWithSalt = [];

const hashNewPass = async (password) => {
  passwd = password;
  await bcrypt
    .genSalt(saltRounds)
    .then((salty) => {
      salt = salty;
      return bcrypt.hash(passwd, salt);
    })
    .then((hash) => {
      passWithSalt.push(hash);
    });
  passWithSalt.push(salt);
  return passWithSalt;
};

const validatePass = async (plainTextPassword, hashing) => {
  let u;
  await bcrypt.compare(plainTextPassword, hashing).then((res) => {
    u = res;
  });
  return u;
};

module.exports.hashNewPass = hashNewPass;
module.exports.validatePass = validatePass;
