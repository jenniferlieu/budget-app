import express from "express";
import * as accountController from "../controllers/accountController.js";

const router = express.Router();

router.get("/", accountController.getAllAccounts);
router.get("/:id", accountController.getAccountById);
router.post("/", accountController.createAccount);
router.put("/:id", accountController.updateAccount);
router.delete("/:id", accountController.deleteAccount);

export default router;
