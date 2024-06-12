import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AgeAndBMI = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [bmiStatus, setBMIStatus] = useState("");
  const [gender, setGender] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [ageColor, setAgeColor] = useState("text-gray-500"); 

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / heightInMeters ** 2).toFixed(2);
      setBMI(bmiValue);
      localStorage.setItem("bmi", bmiValue);
      determineBMIStatus(bmiValue);
    } else {
      toast.error("Please enter height and weight");
    }
  };

  const determineBMIStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      setBMIStatus("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setBMIStatus("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setBMIStatus("Overweight");
    } else {
      setBMIStatus("Obesity");
    }
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    updateButtonDisabledState(e.target.value, weight);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    updateButtonDisabledState(height, e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleAgeColorChange = () => {
    setAgeColor("text-blue-500"); 
  };

  const updateButtonDisabledState = (newHeight, newWeight) => {
    if (newHeight && newWeight) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const clearForm = () => {
    setAge("");
    setHeight("");
    setWeight("");
    setBMI("");
    setBMIStatus("");
    setGender("");
    setIsButtonDisabled(true);
    setAgeColor("text-gray-500"); 
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col min-h-screen lg:items-center justify-center px-5" style={{ backgroundColor: '#ffffff', color: '#101010' }}>
        <h2 className="text-2xl font-extrabold mb-6 mt-20" style={{ color: '#101010' }}>Interested in Knowing your BMI?</h2>
        
        {/* Age section */}
        <div className="flex mb-10 max-w-screen-md">
          <span className="mr-4">Age</span>
          <input
            type="text"
            id="age"
            onChange={handleAgeChange}
            value={age}
            className={`border p-3 w-20 h-10 lg:w-40 border-solid border-2 border-gray-800 shadow-custom focus:outline-none shadow-xl ml-10 ${ageColor}`}
            style={{ backgroundColor: '#ffffff', color: '#101010' }}
            onClick={handleAgeColorChange} 
          />
          <span className="ml-4">ages: 2-120</span>
        </div>
        {/* End of Age section */}

        {/* Gender section */}
        <div className="flex mb-10 max-w-screen-md items-center">
          <span className="mr-4">Gender</span>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={handleGenderChange}
            className={`ml-5 h-6 w-6 ${gender !== 'male' ? 'text-gray-500' : ''}`}
            style={{ color: gender !== 'male' ? '#777777' : '#101010' }}
          />
          <label htmlFor="male" className="ml-2">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={handleGenderChange}
            className={`ml-7 h-6 w-6 ${gender !== 'female' ? 'text-gray-500' : ''}`}
            style={{ color: gender !== 'female' ? '#777777' : '#101010' }}
          />
          <label htmlFor="female" className="ml-2">Female</label>
        </div>
        {/* End of Gender section */}
        
        {/* Height section */}
        <div className="flex mb-10 max-w-screen-md">
          <label htmlFor="height" className="mr-4">Height</label>
          <input
            type="text"
            id="height"
            placeholder="meters"
            value={height}
            onChange={handleHeightChange}
            className="border p-3 w-70 lg:w-80 border-solid border-2 border-gray-800 shadow-custom focus:outline-none shadow-xl"
            style={{ backgroundColor: '#ffffff', color: '#101010' }}
          />
        </div>
        {/* End of Height section */}
        
        {/* Weight section */}
        <div className="flex max-w-screen-md">
          <label htmlFor="weight" className="mr-4">Weight</label>
          <input
            type="text"
            id="weight"
            placeholder="kilograms"
            value={weight}
            onChange={handleWeightChange}
            className="border p-3 w-70 lg:w-80 border-solid border-2 border-gray-800 shadow-custom focus:outline-none shadow-xl"
            style={{ backgroundColor: '#ffffff', color: '#101010' }}
          />
        </div>
        {/* End of Weight section */}
        
        <div className="flex mt-8 justify-center max-w-screen-md mb-3">
          <button
            onClick={calculateBMI}
            disabled={isButtonDisabled}
            className={`px-3 py-2 w-1/3 md:w-40 text-white rounded-md font-semibold ${isButtonDisabled ? "" : "hover:bg-neonblue"}`}
            style={{ backgroundColor: isButtonDisabled ? '#4268FB' : '#FFFFFF' }}
          >
            Calculate
          </button>
          <button
            onClick={clearForm}
            className="ml-4 px-3 py-2 w-1/3 md:w-40 rounded-md font-semibold hover:bg-grey-400"
            style={{ backgroundColor: '#777777', color: '#ffffff' }}
          >
            Clear
          </button>
        </div>
        {bmi && (
          <div className="mt-8 text-xl font-medium">
            <p>BMI: <strong>{bmi}</strong></p>
            <p>Status: <strong>{bmiStatus}</strong></p>
          </div>
        )}
        <p className="mt-4 text-xs text-gray-600 mb-10">
          This helps us calculate your body mass that may lead to health problems.
        </p>
      </div>
    </>
  );
};

export default AgeAndBMI;
