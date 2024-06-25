import React, { useEffect, useState } from "react";
import GetStarted from "../Components/GetStarted.jsx";
import AgeAndBMI from "../Components/AgeAndBMI.jsx";
import DietSelection from "../Components/DietSelection";
import AllergySelection from "../Components/AllergySelection";
import HealthIssuesForm from "../Components/Healthissues.jsx";
import Goal from "../Components/Goal.jsx";
import Navbar from "../Components/Header.jsx";
import Button from "../Components/button.jsx";

const Onboarding = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPage, setShowPage] = useState(false);
  const [bmiCalculated, setBmiCalculated] = useState(false); 
  const [selectedGoal, setSelectedGoal] = useState("");
  const [isDietSelected, setIsDietSelected] = useState(false); 
  const [isAllergySelected, setIsAllergySelected] = useState(false); 
  const [isHealthIssueSelected, setIsHealthIssueSelected] = useState(false); 
  const totalPages = 6;

  useEffect(() => {
    setShowPage(true);
  }, [currentPage]);

  const changeScreen = () => {
    setShowPage(false);
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
      setShowPage(true);
    }, 700);
  };

  const backButton = () => {
    setShowPage(false);
    setTimeout(() => {
      setCurrentPage(currentPage - 1);
      if (currentPage === 3) setSelectedGoal("");
      if (currentPage === 4) setIsDietSelected(false);
      if (currentPage === 5) setIsAllergySelected(false);
      if (currentPage === 6) setIsHealthIssueSelected(false);
      if (currentPage === 7) setBmiCalculated(false); 
      setShowPage(true);
    }, 600);
  };

  const handleBmiCalculated = () => {
    setBmiCalculated(true);
  };

  const handleGoalSelected = (goal) => {
    setSelectedGoal(goal);
  };

  const handleDietSelected = (selected) => {
    setIsDietSelected(selected);
  };

  const handleAllergySelected = (selected) => {
    setIsAllergySelected(selected);
  };

  const handleHealthIssueSelected = (selected) => {
    setIsHealthIssueSelected(selected);
  };

  const isNextButtonDisabled =
    (currentPage === 2 && selectedGoal === "") ||
    (currentPage === 3 && !isDietSelected) ||
    (currentPage === 4 && !isAllergySelected) ||
    (currentPage === 5 && !isHealthIssueSelected) ||
    (currentPage === 6 && !bmiCalculated); 

  return (
    <>
      <div className="flex flex-col items-center justify-between min-h-screen">
        {currentPage > 1 && currentPage <= totalPages && (
          <Navbar
            className={`transition-opacity duration-700 ${
              showPage ? "opacity-100" : "opacity-0"
            }`}
            num_of_page={totalPages - 1}
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
          {currentPage === 2 && <Goal onGoalSelected={handleGoalSelected} />}
          {currentPage === 3 && <DietSelection onDietSelected={handleDietSelected} />}
          {currentPage === 4 && <AllergySelection onAllergySelected={handleAllergySelected} />}
          {currentPage === 5 && <HealthIssuesForm onHealthIssueSelected={handleHealthIssueSelected} />}
          {currentPage === 6 && <AgeAndBMI onBmiCalculated={handleBmiCalculated} />}
        </div>

        {currentPage > 1 && (
          <div className={`flex justify-center fixed bottom-4 left-0 right-0 w-full transition-opacity duration-700`}>
            <Button
              color={"blue"}
              btnClicked={isNextButtonDisabled ? undefined : changeScreen}
              className={`transition-opacity duration-700 ${showPage ? "opacity-100" : "opacity-0"} w-full max-w-xs ${
                isNextButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              to={currentPage === totalPages && bmiCalculated ? "/signup" : undefined}
            >
              {currentPage === totalPages ? "Finish" : "Next"}
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Onboarding;
