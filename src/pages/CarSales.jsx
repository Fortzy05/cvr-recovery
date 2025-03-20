import React from "react";

const carsForSale = [
  {
    id: 1,
    name: "Toyota Corolla 2019",
    price: "£12,500",
    image: "/images/car1.jpg",
  },
  { id: 2, name: "BMW X5 2021", price: "£35,000", image: "/images/car2.jpg" },
  { id: 3, name: "Audi A4 2020", price: "£22,000", image: "/images/car3.jpg" },
  {
    id: 4,
    name: "Ford Fiesta 2018",
    price: "£9,800",
    image: "/images/car4.jpg",
  },
];

function CarSales() {
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Cars for Sale
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Browse our available cars and find the perfect one for you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {carsForSale.map((car) => (
          <div
            key={car.id}
            className="bg-white p-4 shadow-lg rounded-lg text-center"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-900 mt-2">
              {car.name}
            </h3>
            <p className="text-lg text-blue-700 font-bold">{car.price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Inquire Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarSales;
