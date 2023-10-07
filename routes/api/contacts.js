const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const validateBody = require("../../middlewares/validateBody");
const authenticate = require("../../middlewares/authenticate");
const { schemas } = require("../../schema/contact");

router.use(authenticate); 

router.get("/", ctrlWrapper(ctrl.getAll));
router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

router.get("/:contactId", ctrlWrapper(ctrl.getById));
router.delete("/:contactId", ctrlWrapper(ctrl.remove));
router.put("/:contactId", validateBody(schemas.addSchema), ctrlWrapper(ctrl.update));

router.patch("/:contactId/favorite", validateBody(schemas.updateFavorite), ctrlWrapper(ctrl.updateFavorite));

module.exports = router;
