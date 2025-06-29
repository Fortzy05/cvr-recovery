import React, { useEffect, useState } from "react";
import { sanity } from "../lib/sanityClient"; // Your configured Sanity client
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanity);

function urlFor(source) {
  return builder.image(source);
}

function CarSales() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const results = await sanity.fetch(
          `*[_type == "car"] | order(_createdAt desc){
            _id,
            name,
            price,
            image
          }`
        );
        setCars(results);
      } catch (err) {
        console.error("Failed to fetch cars:", err);
      }
    };

    fetchCars();
  }, []);

  return (
    <div
      className="relative py-16 px-6 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/car4.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-4xl font-bold">Cars for Sale</h2>
        <p className="text-lg mt-2 max-w-2xl mx-auto">
          Browse our available cars and find the perfect one for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {cars.map((car) => (
            <div
              key={car._id}
              className="bg-white p-5 rounded-lg shadow-xl text-center transform hover:scale-105 transition duration-300"
            >
              <img
                src={urlFor(car.image).width(400).url()}
                alt={car.name}
                className="w-full h-52 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-900 mt-3">
                {car.name}
              </h3>
              <p className="text-lg text-blue-600 font-bold">£{car.price}</p>

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
