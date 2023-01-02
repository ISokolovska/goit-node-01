import * as argv from "yargs/argv";
// const argv = require("yargs").argv;
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
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

const argv = process.argv;
