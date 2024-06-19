import React from "react";
import MealHistory from "../Components/MealHistory";
import SearchBar from "../Components/SearchBar";

export default function MealPlanPage() {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <div className="">
        <SearchBar />
        <MealHistory />
      </div>
    </div>
  );
}
