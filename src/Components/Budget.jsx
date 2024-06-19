import React, { useState, useEffect } from "react";

const Budget = () => {
  const [selectedBudget, setSelectedBudget] = useState("flexible");

  const handleBudgetSelect = (value) => {
    setSelectedBudget(value);
  };

  useEffect(() => {
    localStorage.setItem("selectedBudget", selectedBudget);
  }, [selectedBudget]);

  return (
    <div className="flex flex-col gap-y-5 justify-center min-h-screen mx-8">
      <h2 className="font-bold text-2xl">
        How would you describe your budget?
      </h2>
      <div className="flex flex-col gap-y-2 justify-center">
        {/* Container for Flexible */}
        <div className="bg-blue-50 rounded-md p-2">
          <div className="flex gap-2">
            <input
              type="radio"
              name="budget"
              id="flexible"
              className=""
              checked={selectedBudget === "flexible"}
              onChange={() => handleBudgetSelect("flexible")}
            />
            <label htmlFor="flexible" className="">
              Flexible
            </label>
          </div>
        </div>
        {/* Container for Moderate */}
        <div className="bg-blue-50 rounded-md p-2">
          <div className="flex gap-2">
            <input
              type="radio"
              name="budget"
              id="moderate"
              className=""
              checked={selectedBudget === "moderate"}
              onChange={() => handleBudgetSelect("moderate")}
            />
            <label htmlFor="moderate" className="">
              Moderate
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
