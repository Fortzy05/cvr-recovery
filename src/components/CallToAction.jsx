// import React from "react";

// function CallToAction() {
//   return (
//     <div className="bg-yellow-500 text-gray-900 py-12 text-center">
//       <h2 className="text-3xl font-bold">Need Immediate Assistance?</h2>
//       <p className="text-lg mt-2">
//         Call us now for fast & reliable vehicle recovery.
//       </p>
//       <a
//         href="tel:+44 7407 207196"
//         className="mt-4 inline-block bg-gray-900 text-yellow-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-all duration-300"
//       >
//         Call Now: +44 7407 207196
//       </a>
//     </div>
//   );
// }

// export default CallToAction;

import React from "react";

function CallToAction() {
  return (
    <div className="bg-yellow-500 text-gray-900 py-10 px-6 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
        Need Immediate Assistance?
      </h2>
      <p className="text-base sm:text-lg mt-2">
        Call us now for fast & reliable vehicle recovery.
      </p>

      {/* Button - Full width on small screens */}
      <a
        href="tel:+44 7407 207196"
        className="mt-6 inline-block w-full sm:w-auto bg-gray-900 text-yellow-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg"
      >
        📞 Call Now: +44 7407 207196
      </a>
    </div>
  );
}

export default CallToAction;
