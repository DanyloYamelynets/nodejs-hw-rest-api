const { User } = require("../../models/user");

const updSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  const user = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );
  res.json(user);
};

module.exports = updSubscription;