import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
import hero7 from "../assets/hero7.jpg";
import hero8 from "../assets/hero8.jpg";
import hero9 from "../assets/hero9.jpg";
import hero10 from "../assets/hero10.jpg";
import hero11 from "../assets/hero11.jpg";
import hero12 from "../assets/hero12.jpg";
import hero13 from "../assets/hero13.jpg";
import hero14 from "../assets/hero14.jpg";
import hero15 from "../assets/hero15.jpg";
import hero16 from "../assets/hero16.jpg";
import hero17 from "../assets/hero17.jpg";
import hero18 from "../assets/hero18.jpg";
import hero19 from "../assets/hero19.jpg";
import hero20 from "../assets/hero20.jpg";
// Ensure video paths are correct
const galleryItems = [
 { id: 1, type: "image", src: hero1 },
  { id: 2, type: "image", src: hero2 },
  { id: 3, type: "image", src: hero3 },
  { id: 4, type: "image", src: hero4 },
  { id: 5, type: "image", src: hero5 },
  { id: 6, type: "image", src: hero6 },
  { id: 7, type: "image", src: hero7 },
  { id: 8, type: "image", src: hero8 },
  { id: 9, type: "image", src: hero9 },
  { id: 10, type: "video", src: "/videos/video1.mp4" }, // Video 1
  { id: 11, type: "image", src: hero10 },
  { id: 12, type: "image", src: hero11 },
  { id: 13, type: "image", src: hero12 },
  { id: 14, type: "image", src: hero13 },
  { id: 15, type: "image", src: hero14 },
  { id: 16, type: "video", src: "/videos/video2.mp4" }, // Video 2
  { id: 17, type: "image", src: hero15 },
  { id: 18, type: "image", src: hero16 },
  { id: 19, type: "image", src: hero17 },
  { id: 20, type: "image", src: hero18 },
  { id: 21, type: "video", src: "/videos/video3.mp4" }, // Video 3
  { id: 22, type: "image", src: hero19 },
  { id: 23, type: "image", src: hero20 },
  {id: 24, type: "video", src: "/videos/video4.mp4"}
];

function Gallery() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="  mx-auto py-12 px-6 bg-gray-100 overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Gallery
        </h2>
        <p className="text-center md:text-2xl text-gray-600 mt-2">
          Browse Through Our Completed Vehicle Recovery Jobs.
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
                  className="w-full h-56 object-cover rounded-md"
                />
              ) : (
                <video
                  controls
                  className="w-full h-56 object-cover rounded-md"
                  preload="metadata"
                >
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
