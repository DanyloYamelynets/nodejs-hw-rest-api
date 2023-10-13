const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/auth");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const validateBody = require("../../middlewares/validateBody");
const authenticate = require("../../middlewares/authenticate");
const { schemas } = require("../../schema/contact");
const upload = require("../../middlewares/upload");

router.post("/register", validateBody(schemas.authSchema), ctrlWrapper(ctrl.register));

router.post("/login", validateBody(schemas.authSchema), ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch("/subscription", authenticate, validateBody(schemas.subscriptionSchema), ctrlWrapper(ctrl.updSubscription));

router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(ctrl.updAvatar));

module.exports = router;
