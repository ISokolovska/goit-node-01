import * as fs from "fs/promises";
import { nanoid } from "nanoid";

export const listContacts = async () => {
  const contactsJson = await fs.readFile("./db/contacts.json", "utf8");
  return JSON.parse(contactsJson);
};

// console.log(
//   "🚀 ~ file: contacts.js:5 ~ listContacts ~ listContacts",
//   await listContacts()
// );

export const addContact = async (contact) => {
  const contacts = await listContacts();
  contacts.push(contact);
  await fs.writeFile("./db/contacts.json", JSON.stringify(contacts));
  return contact;
};

// console.log(
//   "🚀 ~ file: contacts.js:15 ~ addContact ~ addContact",
//   await addContact({
//     id: nanoid(),
//     name: "Iuliia Sokolovska",
//     email: "uu.sokil@gmail.com",
//     phone: "456-456",
//   })
// );

export const getContactById = async (contactId) => {
  const contacts = await listContacts();
  return contacts.find((contact) => contact.id === contactId);
};

// console.log(
//   "🚀 ~ file: contacts.js:31 ~ getContactById ~ getContactById",
//   await getContactById("2")
// );

export const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const contactRemoved = contacts.filter((contact) => contact.id !== contactId);
  await fs.writeFile("./db/contacts.json", JSON.stringify(contactRemoved));
  return true;
};

// console.log(
//   "🚀 ~ file: contacts.js:44 ~ removeContact ~ removeContact",
//   await removeContact("8")
// );
