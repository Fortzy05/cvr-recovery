// schemas/car.js
export default {
  name: 'car',
  title: 'Car for Sale',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Car Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
