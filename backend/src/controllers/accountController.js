import * as accountService from "../services/accountService.js";

export const getAllAccounts = async (req, res) => {
  try {
    const accounts = await accountService.getAllAccounts();
    res.status(200).json(accounts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch accounts" });
  }
};

export const getAccountById = async (req, res) => {
  try {
    const account = await accountService.getAccountById(req.params.id);
    res.status(200).json(account);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch account by id" });
  }
};

export const createAccount = async (req, res) => {
  try {
    const newAccount = await accountService.createAccount(req.body);
    res.status(201).json(newAccount);
  } catch (err) {
    res.status(500).json({ error: "Failed to create account" });
  }
};

export const updateAccount = async (req, res) => {
  try {
    const updated = await accountService.updateAccount(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update account" });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    await accountService.deleteAccount(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete account" });
  }
};
