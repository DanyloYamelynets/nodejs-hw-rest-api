const { Contact } = require("../../models/contact");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 2, favorite } = req.query;
  const filter = { owner };

  if (favorite !== undefined) {
    filter.favorite = favorite;
  }

  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };

  const result = await Contact.paginate(filter, options);
  res.json(result);
};

module.exports = getAll;
