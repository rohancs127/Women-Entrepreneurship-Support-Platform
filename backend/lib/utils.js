import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { customAlphabet } from "nanoid";

/**
 * @description Generate a random unique id
 * @param {number} length - Length of the nanoid
 * @param {string} prefix - Add prefix to the ID
 * @returns {string} Random Id of desired length and prefix
 */

export function generate_nanoId(length, prefix) {
  const length_to_generate = length - prefix.length;
  const nanoid = customAlphabet(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
    length_to_generate
  );
  return `${prefix}${nanoid()}`;
}

/**
 * @description Hashes password
 * @param {string} password - Original Password
 * @returns {string} Hashed password
 */

export async function hashPassword(password) {
  const salt = 10;
  return await bcryptjs.hash(password, salt);
}

/**
 * @description Filters object by removing the keys mentioned
 * @param {object} object - Object to get filtered
 * @param {string[]} flags - Array of keys which are to be removed
 * @returns {object} Filtered object
 */

export function filterObject(object, flags) {
  const filteredObject = { ...object };
  flags.forEach((flag) => {
    delete filteredObject[flag];
  });
  return filteredObject;
}

export function generateToken(user) {
  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
}
