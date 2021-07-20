const User = require("../models/User");

async function createUser(username, hashedPass) {
  const user = new User({
    username,
    hashedPass,
  });
  await user.save();
  return user;
}

async function getUserByUsername(username) {
  const regex = new RegExp(`^${username}$`, "i");
  const user = await User.findOne({ username: { $regex: regex } });
  return user;
}

async function getUserByEmail(email) {
  const regex = new RegExp(`^${email}$`, "i");
  const user = await User.findOne({ email: { $regex: regex } });
  return user;
}

module.exports = {
  createUser,
  getUserByUsername,
  getUserByEmail,
};
