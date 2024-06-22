import React, { useEffect, useState } from "react";
import GetStarted from "../Components/GetStarted.jsx";
import AgeAndBMI from "../Components/AgeAndBMI.jsx";
import Dislikes from "../Components/Dislikes.jsx";
import PlanMeal from "../Components/PlanMeal.jsx";
import DietSelection from "../Components/DietSelection";
import AllergySelection from "../Components/AllergySelection";
import MealServings from "../Components/MealServings";
import Navbar from "../Components/Header.jsx";
import Button from "../Components/button.jsx";
import { Link } from "react-router-dom";

const Onboarding = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setShowPage(true);
  }, [currentPage]);

  const changeScreen = () => {
    setShowPage(false);
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
    }, 700);
  };

  const backButton = () => {
    console.log("you skipped");
    setShowPage(false);
    setTimeout(() => {
      setCurrentPage(currentPage - 1);
    }, 600);
  };

  const buttonContainerStyles = `
    flex justify-center absolute bottom-4 left-0 right-0 w-full
    transition-opacity duration-700
  `;

  const buttonStyles = `
    w-full max-w-xs
  `;

  return (
    <>
      <div className="flex flex-col items-center justify-around min-h-screen">
        {currentPage > 1 && currentPage <= 7 && (
          <Navbar
            className={`transition-opacity duration-700 ${
              showPage ? "opacity-100" : "opacity-0"
            }`}
            num_of_page={6}
            current_page={currentPage - 1}
            previous={backButton}
          />
        )}
        <div
          className={`transition-opacity duration-700 ${
            showPage ? "opacity-100" : "opacity-0"
          }`}
        >
          {currentPage === 1 && <GetStarted onNext={changeScreen} />}
          {currentPage === 2 && <AgeAndBMI />}
          {currentPage === 3 && <Dislikes />}
          {currentPage === 4 && <DietSelection />}
          {currentPage === 5 && <AllergySelection />}
          {currentPage === 6 && <MealServings />}
          {currentPage === 7 && <PlanMeal />}
        </div>

        {currentPage > 1 && (
          <div className={buttonContainerStyles}>
            {currentPage < 7 && (
              <Button
                color={"blue"}
                btnClicked={changeScreen}
                className={`transition-opacity duration-700 ${showPage ? "opacity-100" : "opacity-0"} ${buttonStyles}`}
              >
                Next
              </Button>
            )}
            {currentPage === 7 && (
              <Link to="/signup">
                <Button
                  color={"#4268fb"}
                  className={`${buttonStyles}`}
                >
                  Next
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Onboarding;
