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
    <div
      className="relative py-16 px-6 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/car4.jpg')" }} // Add a relevant background image
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-4xl font-bold">Cars for Sale</h2>
        <p className="text-lg mt-2 max-w-2xl mx-auto">
          Browse our available cars and find the perfect one for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {carsForSale.map((car) => (
            <div
              key={car.id}
              className="bg-white p-5 rounded-lg shadow-xl text-center transform hover:scale-105 transition duration-300"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-52 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-900 mt-3">
                {car.name}
              </h3>
              <p className="text-lg text-blue-600 font-bold">{car.price}</p>

              <button className="mt-4 px-5 py-3 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-400 transition-all">
                Inquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarSales;
