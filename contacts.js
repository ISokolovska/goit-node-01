import * as fs from "fs/promises";
import { nanoid } from "nanoid";

export const listContacts = async () => {
  const contactsJson = await fs.readFile("./db/contacts.json", "utf8");
  return JSON.parse(contactsJson);
};

export const addContact = async ({ id, name, email, phone }) => {
  const contacts = await listContacts();
  contacts.push({ id: nanoid(), name, email, phone });
  await fs.writeFile("./db/contacts.json", JSON.stringify(contacts));
  return { id: nanoid(), name, email, phone };
};

export const getContactById = async (contactId) => {
  const contacts = await listContacts();
  return contacts.find((contact) => contact.id === contactId.toString());
};

export const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const removedContact = contacts.filter((contact) => {
    return contact.id !== contactId.toString();
  });
  await fs.writeFile("./db/contacts.json", JSON.stringify(removedContact));
  return true;
};
