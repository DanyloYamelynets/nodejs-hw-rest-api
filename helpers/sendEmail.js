const nodemailer = require("nodemailer");

const { META_PASSWORD, META_USER } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: META_USER,
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendMail = async (data) => {
  const mail = { ...data, from: META_USER };
  await transport.sendMail(mail);
  return true;
};

module.exports = sendMail;
