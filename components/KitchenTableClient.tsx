"use client";

import { useState } from "react";

const KitchenTableClient = ({ recipes }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="flex">
      <button onClick={toggleContent} className=" box-border bg-white text-green-800 font-semibold px-3 py-2 rounded-xl">
        Show Recipe!
      </button>
      {isContentVisible && (
        <div>
          <p>{recipes.description}</p>
          <h2>Ingredients:</h2>
          <ul>
            {recipes.ingredients.map((ingredient: any) => (
              <li className="pl-2 font-light" key={ingredient._id}>
                {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default KitchenTableClient;