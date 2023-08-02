import { contactList } from "../Contacts";

export const getContactById = (id) => {
  //Filter returns an array
  let result = contactList.filter((contact) => contact.id === Number(id));
  return result[0];
};

export const addContact = (id, name, profession, imageURL) => {
  const contact = { id, name, profession, imageURL };
  contactList.push(contact);
};

export const filterContactsBySearchQuery = (query) => {
  // Return contacts that includes the search query
  return contactList.filter((contact) =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const deleteContact = (array, id) => {
  //Find the index of the contact using id then delete it from the array
  const deleteIndex = array.findIndex((contact) => contact.id === Number(id));
  if (deleteIndex !== -1) {
    array.splice(deleteIndex, 1);
  }

  return array;
};

export const editContact = (array, id, updatedData) => {
  return array.map((contact) =>
    contact.id === Number(id) ? { ...contact, ...updatedData } : contact
  );
};
