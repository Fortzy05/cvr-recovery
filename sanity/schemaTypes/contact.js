// schemas/contact.js
export default {
  name: 'contact',
  title: 'Contact Message',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'email', title: 'Email', type: 'string'},
    {name: 'message', title: 'Message', type: 'text'},
  ],
}
