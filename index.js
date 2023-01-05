import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { nanoid } from "nanoid";

import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.log(contacts);
      break;

    case "get":
      const contactById = await getContactById(id);
      console.log(contactById);
      break;

    case "add":
      const contact = await addContact({ id: nanoid(), name, email, phone });
      console.log(contact);
      break;

    case "remove":
      const contactRemoved = await removeContact(id);
      console.log(contactRemoved);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const argvArr = hideBin(process.argv);
console.log("🚀 ~ file: index.js:38 ~ argvArr", argvArr);
const args = yargs(argvArr).argv;
await invokeAction(args);
