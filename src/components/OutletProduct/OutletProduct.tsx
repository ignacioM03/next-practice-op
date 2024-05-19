import React from "react";

export const OutletProduct = () => {
  return (
    <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://readymadeui.com/cardImg.webp"
              alt="Blog Post 1"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Lorem Ipsum Dolor
              </h3>
              <p className="text-gray-600 text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore...
              </p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block text-blue-600 text-sm hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://readymadeui.com/hotel-img.webp"
              alt="Blog Post 2"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Consectetur Adipiscing
              </h3>
              <p className="text-gray-600 text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore...
              </p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block text-blue-600 text-sm hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://readymadeui.com/team-image.webp"
              alt="Blog Post 3"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Lorem Ipsum Sit Amet
              </h3>
              <p className="text-gray-600 text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore...
              </p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block text-blue-600 text-sm hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
