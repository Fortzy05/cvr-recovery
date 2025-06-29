// schemaTypes/quote.js
export default {
  name: 'quote',
  title: 'Quote Request',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3),
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .regex(/^\d{10,15}$/, {
            name: 'phone',
            invert: false,
          })
          .error('Enter a valid phone number (10–15 digits)'),
    },
    {
      name: 'serviceRequired',
      title: 'Service Required',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'additionalInfo',
      title: 'Additional Information',
      type: 'text',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    },
  ],
}
