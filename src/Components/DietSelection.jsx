import React, { useState } from "react";

const DietSelection = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const dietOptions = [
    { name: "Vegan", description: "Only eat plant-based food" },
    { name: "Vegetarian", description: "Don’t eat meat and fish" },
    { name: "Flexitarian", description: "Occasionally eats meat and fish" },
    { name: "Pescetarian", description: "Don’t eat meat but eats fish" },
    { name: "Omnivore", description: "Eats meat and almost everything" },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleCheckboxChange = (option) => {
  };

  return (
    <div className="min-h-screen w-screen px-4 flex flex-col justify-center lg:items-center">
      <h2 className="mb-4 text-2xl font-bold text-left lg:text-center">
        What are your dietary preferences?
      </h2>
      <div className="flex flex-col gap-2 mb-10">
        {dietOptions.map((option) => (
          <div
            key={option.name}
            className={`flex flex-col items-start ${
              selectedOption === option.name ? "bg-blue-200" : ""
            }`}
            onMouseEnter={() => setSelectedOption(option.name)}
            onMouseLeave={() => setSelectedOption("")}
          >
            <label className="flex items-center gap-2">
              <button
                onClick={() => handleOptionSelect(option.name)}
                className={`py-3 px-4 rounded-md hover:bg-blue-200`}
                style={{ width: "250px" }} 
              >
                <div className="flex flex-col items-start">
                  <span className="font-bold">{option.name}</span>
                  <p style={{ fontSize: "14px" }}>{option.description}</p>
                </div>
              </button>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(option.name)}
                checked={selectedOption === option.name}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietSelection;
