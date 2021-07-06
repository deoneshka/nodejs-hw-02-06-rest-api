const fs = require('fs/promises');
const path = require('path');
const { v4 } = require('uuid');

const contactsPath = path.join(__dirname, 'contacts.json');

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);

  return contacts;
};

const getContactById = async contactId => {
  const contacts = await listContacts();
  const contact = contacts.find(item => JSON.stringify(item.id) === contactId);

  return contact;
};

const removeContact = async contactId => {
  const contacts = await listContacts();
  const newContacts = contacts.filter(
    item => JSON.stringify(item.id) !== contactId,
  );
  const string = JSON.stringify(newContacts);
  await fs.writeFile(contactsPath, string);
};

const addContact = async body => {
  const newContact = { id: v4(), ...body };
  const contacts = await listContacts();
  const newContacts = [...contacts, newContact];
  const string = JSON.stringify(newContacts);
  await fs.writeFile(contactsPath, string);
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  console.log(body);
  const contactIndex = contacts.findIndex(
    ({ id }) => JSON.stringify(id) === contactId,
  );
  contacts[contactIndex] = { ...contacts[contactIndex], ...body };
  const string = JSON.stringify(contacts);
  await fs.writeFile(contactsPath, string);
  return contacts[contactIndex];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
