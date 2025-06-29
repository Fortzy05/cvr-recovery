// schemas/booking.js
export default {
  name: 'booking',
  title: 'Booking',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3),
    },
    {
      name: 'phone',
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
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
            name: 'email',
            invert: false,
          })
          .error('Enter a valid email address'),
    },
    {
      name: 'serviceType',
      title: 'Service Type',
      type: 'string',
      options: {
        list: [
          {title: 'Breakdown Recovery', value: 'breakdown'},
          {title: 'Towing Service', value: 'towing'},
          {title: 'Vehicle Transport', value: 'transport'},
          {title: 'Home/Commercial Removals', value: 'removals'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pickupLocation',
      title: 'Pickup Location',
      type: 'string',
      validation: (Rule) => Rule.required().min(3),
    },
    {
      name: 'dropoffLocation',
      title: 'Dropoff Location',
      type: 'string',
      validation: (Rule) => Rule.required().min(3),
    },
    {
      name: 'vehicleDetails',
      title: 'Vehicle Details',
      type: 'text',
      validation: (Rule) => Rule.required().min(10),
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
