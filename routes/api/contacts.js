const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const ctrlWrapper = require("../../helpers/ctrlWrapper");

const validateBody = require("../../middlewares/validateBody");

const schema = require("../../schema/book");

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schema), ctrlWrapper(ctrl.add));

router.delete("/:contactId", ctrlWrapper(ctrl.remove));

router.put("/:contactId", validateBody(schema), ctrlWrapper(ctrl.update));

module.exports = router;
