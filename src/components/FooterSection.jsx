import React from "react";

export default function FooterSection() {
  return (
    <div className="w-full bg-[#404040] py-10 px-6 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between space-y-10 md:space-y-0">
        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h1 className="uppercase text-2xl mb-4">Our Contact</h1>
          <div className="space-y-3">
            {/* Email */}
            <div className="flex items-center gap-2 hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="white"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
              <span>Edline24/7ltd@gmail.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="white"
              >
                <path d="M796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.86 12.57-31.43T164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806l26.62 130.43q2.05 14.9-.62 26.24-2.66 11.33-10.82 19.48L265.67-530q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.26-14.5 13.61-4.17 26.74-2.17L806-349.33q14.67 4 24.33 15.53Q840-322.27 840-308v144q0 18.86-12.57 31.43T796-120Z" />
              </svg>
              <span>+44 7407 207196</span>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="text-center md:text-left">
          <h1 className="uppercase text-2xl mb-4">Our Services</h1>
          <ul className="space-y-1">
            <li>Car Recovery</li>
            <li>Vehicle Recovery</li>
            <li>Spare Wheel Change</li>
            <li>Fuel Service</li>
            <li>Breakdown Recovery</li>
            <li>Recovery</li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="text-center md:text-left">
          <h1 className="uppercase text-2xl mb-4">Our Address</h1>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="white"
            >
              <path d="M480.06-486.67q30.27 0 51.77-21.56 21.5-21.55 21.5-51.83 0-30.27-21.56-51.77-21.55-21.5-51.83-21.5-30.27 0-51.77 21.56-21.5 21.55-21.5 51.83 0 30.27 21.56 51.77 21.55 21.5 51.83 21.5ZM480-168q129.33-118 191.33-214.17 62-96.16 62-169.83 0-114.86-73.36-188.1-73.36-73.23-179.97-73.23T300.03-740.1q-73.36 73.24-73.36 188.1 0 73.67 63 169.83Q352.67-286 480-168Zm0 88Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            <span>
              Birmingham, Walsall, <br /> Wolverhampton, Dudley, Coventry
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
