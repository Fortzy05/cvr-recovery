import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const galleryItems = [
  { id: 1, type: "image", src: "/images/tow1.jpg" },
  { id: 2, type: "image", src: "/images/tow2.jpg" },
  { id: 3, type: "video", src: "/videos/tow1.mp4" },
  { id: 4, type: "image", src: "/images/tow3.jpg" },
  { id: 5, type: "video", src: "/videos/tow2.mp4" },
];

function Gallery() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Gallery
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Browse through our completed tow jobs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 shadow-lg rounded-lg text-center"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="Tow Job"
                  className="w-full h-48 object-cover rounded-md"
                />
              ) : (
                <video controls className="w-full h-48 object-cover rounded-md">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
