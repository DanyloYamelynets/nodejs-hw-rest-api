const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updSubscription = require("./updSubscription");
const updAvatar = require("./updAvatar");
const verify = require("./verify");
const resendEmail = require("./resendEmail");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updSubscription,
  updAvatar,
  verify,
  resendEmail,
};
