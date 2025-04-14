import prisma from "../../prisma/client.js";

/**
 * Fetch all accounts from the database.
 * @returns {Promise<Array>} List of accounts.
 */
export const getAllAccounts = async () => {
  return await prisma.account.findMany();
};

/**
 * Fetch a single account by its ID.
 * @param {number} id - The ID of the account.
 * @returns {Promise<Object|null>} The account object or null if not found.
 */
export const getAccountById = async (id) => {
  return await prisma.account.findUnique({
    where: { id },
  });
};

/**
 * Create a new account in the database.
 * @param {Object} data - The account data to create.
 * @returns {Promise<Object>} The created account object.
 */
export const createAccount = async (data) => {
  return await prisma.account.create({
    data,
  });
};

/**
 * Update an existing account by its ID.
 * @param {number} id - The ID of the account to update.
 * @param {Object} data - The updated account data.
 * @returns {Promise<Object>} The updated account object.
 */
export const updateAccount = async (id, data) => {
  return await prisma.account.update({
    where: { id },
    data,
  });
};

/**
 * Delete an account by its ID.
 * @param {number} id - The ID of the account to delete.
 * @returns {Promise<Object>} The deleted account object.
 */
export const deleteAccount = async (id) => {
  return await prisma.account.delete({
    where: { id },
  });
};
