import { contactList } from "../Contacts";

export const getContactById = (id) => {
  //Filter returns an array
  let result = contactList.filter((contact) => contact.id === Number(id));
  return result[0];
};
