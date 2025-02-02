const { Contact } = require("../../models/contact");
const RequestError = require("../../helpers/RequestError");

const update = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body);
  if (!result) {
    throw RequestError(404);
  }
  res.status(201).json(result);
};

module.exports = update;
