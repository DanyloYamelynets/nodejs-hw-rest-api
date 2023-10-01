const RequestError = require("../../helpers/RequestError");
const { Contact } = require("../../models/contact");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById({ _id: contactId });
  if (!result) {
    throw RequestError(404);
  }
  res.json(result);
};

module.exports = getById;
