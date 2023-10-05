const bcrypt = require("bcryptjs");
const RequestError = require("../../helpers/RequestError");
const { User } = require("../../models/user");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw RequestError(401, "Wrong email or password");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw RequestError(401, "Wrong email or password");
  }

  const token = "feufhfeufeifdwof";

  res.json({
    token,
  });
};

module.exports = login;
