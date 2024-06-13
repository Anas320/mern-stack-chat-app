const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const { User } = require("@models");

const register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = uuidv4();

  try {
    await User.insertOne({
      id: userId,
      username,
      password: hashedPassword,
    });
    res.status(201).send({ id: userId, username });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, "secret", {
      expiresIn: "24h",
    });
    res.send({ token });
  } catch (err) {
    res.status(500).send({ message: "Error logging in" });
  }
};

module.exports = { register, login };
