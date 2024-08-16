import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";

const ShowCaseCard = ({ product }) => {
  const {
    image,
    brand_name,
    category_name,
    price,
    date,
    rating: newRating,
  } = product || {};

  return (
    <div>
      <div className="p-6 rounded-md border-2 ">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
            {brand_name}
          </span>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-wide">
              {category_name}
            </h2>
            <h2>
              <Rating style={{ maxWidth: 100 }} value={parseInt(newRating)} />
            </h2>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-red-500 font-semibold">${price}</p>
          </div>
          <p className="text-red-500 font-semibold">{date}</p>
        </div>
        <p className="dark:text-gray-800">
          {brand_name} you’re looking for reliability, efficiency, or a sleek
          design, the {category_name} offers it all. Ideal for those who value{" "}
          {brand_name}.
        </p>
      </div>
    </div>
  );
};

export default ShowCaseCard;
