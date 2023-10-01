const { Contact } = require("../../models/contact");
const RequestError = require("../../helpers/RequestError");

const remove = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw RequestError(404);
  }
  res.json({
    message: "Contact deleted",
  });
};

module.exports = remove;
