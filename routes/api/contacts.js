const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const validateBody = require("../../middlewares/validateBody");
const authenticate = require("../../middlewares/authenticate");
const { schemas } = require("../../schema/contact");

router.get("/", authenticate, ctrlWrapper(ctrl.getAll));
router.post("/", authenticate, validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

router.get("/:contactId", authenticate, ctrlWrapper(ctrl.getById));
router.delete("/:contactId", authenticate, ctrlWrapper(ctrl.remove));
router.put("/:contactId", authenticate, validateBody(schemas.addSchema), ctrlWrapper(ctrl.update));

router.patch("/:contactId/favorite", authenticate, validateBody(schemas.updateFavorite), ctrlWrapper(ctrl.updateFavorite));

module.exports = router;
