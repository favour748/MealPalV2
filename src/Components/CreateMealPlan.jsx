import React, { useState } from "react";
import Notification from "./Notification";
import { Link } from "react-router-dom";

const CreateMealPlan = () => {
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <div className="flex flex-col justify-center items-center mb-10 mt-6">
      <div className="inline-flex w-[358px] h-[80px] flex-col items-start">
        <h1 className="font-manrope text-lg font-semibold leading-normal">
          Create meal plan
        </h1>
        <p className="font-manrope text-sm  text-[#545454] mt-3 font-normal leading-normal">
          Personal dietary record
        </p>
      </div>
      <div className="flex flex-col w-[358px] items-start  mb-6 gap-2">
        <p className="font-manrope text-sm font-bold leading-[21px]">
          Meal plan title
        </p>
        <div className="flex p-4 items-start content-start gap-4  self-stretch flex-wrap rounded-[4px] border border-grey-600">
          <p className="font-manrope text-gray-600 text-sm leading-[150%]">
            Add a title
          </p>
        </div>
      </div>

      <div className="flex flex-col ">
        <p className="font-manrope text-[13px] mb-2 font-bold leading-normal text-[#545454]">
          Your dietary record
        </p>

        <div
          className="inline-flex p-2 w-[358px] h-[80px] mb-2 flex-col items-start gap-2 
      rounded-lg border border-[#EAEAEA] bg-[#F4F4F4]"
        >
          <p className="font-manrope text-sm font-bold leading-normal text-[#545454]">
            Diet Type:
          </p>
          <p className="font-manrope text-sm font-medium leading-normal text-[#545454]">
            Vegetarian
          </p>
        </div>

        <div
          className="inline-flex p-2 flex-col w-[358px] h-[80px] mb-2 items-start gap-2 
      rounded-lg border border-[#EAEAEA] bg-[#F4F4F4]"
        >
          <p className="font-manrope text-sm font-bold leading-normal text-[#545454]">
            Budget:
          </p>
          <p className="font-manrope text-sm font-medium leading-normal text-[#545454]">
            Flexible
          </p>
        </div>

        <div
          className="inline-flex p-2 flex-col w-[358px] h-[80px] mb-2 items-start gap-2
       rounded-lg border  bg-[#F4F4F4] border-[#EAEAEA]"
        >
          <p className="font-manrope text-sm font-bold leading-normal text-[#545454]">
            Allergies:
          </p>
          <div className="flex w-[342px] items-start content-start gap-2 flex-wrap">
            <div className="flex p-1 items-start gap-4 rounded-full bg-[#DADADA]">
              <p className="font-manrope text-sm font-medium leading-normal text-[#545454]">
                Groundnut
              </p>
            </div>
            <div className="flex p-1 items-start gap-4 rounded-full bg-[#DADADA]">
              <p className="font-manrope text-sm font-medium leading-normal text-[#545454]">
                Fish
              </p>
            </div>
            <div className="flex p-1 items-start gap-4 rounded-full bg-[#DADADA]">
              <p className="font-manrope text-sm font-medium leading-normal text-[#545454]">
                Peanut
              </p>
            </div>
            <div className="flex p-1 items-start gap-4 rounded-full bg-[#DADADA]">
              <p className="font-manrope text-sm font-medium leading-normal text-[#545454]">
                Soybeans
              </p>
            </div>
          </div>
        </div>

        <div
          className="inline-flex p-2 flex-col w-[358px] h-[80px] mb-2 items-start gap-2 
      rounded-lg border  bg-[#F4F4F4] border-[#EAEAEA]"
        >
          <p className="font-manrope text-sm font-bold leading-normal text-[#545454]">
            Dislikes:
          </p>
          <div className="flex w-[342px] items-start content-start gap-2 flex-wrap">
            <div className="flex p-1 items-start gap-4 rounded-full bg-[#DADADA]">
              <p className="font-manrope text-sm font-medium leading-normal text-[#545454]">
                Tofu
              </p>
            </div>
            <div className="flex p-1 items-start gap-4 rounded-full bg-[#DADADA]">
              <p className="font-manrope text-sm font-medium leading-normal text-[#545454]">
                Blue cheese
              </p>
            </div>
            <div className="flex p-1 items-start gap-4 rounded-full bg-[#DADADA]">
              <p className="font-manrope text-sm font-medium leading-normal text-[#545454]">
                Egg plant
              </p>
            </div>
            <div className="flex p-1 items-start gap-4 rounded-full bg-[#DADADA]">
              <p className="font-manrope text-sm font-medium leading-normal text-[#545454]">
                Soybeans
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <button
          className="font-manrope text-md font-medium leading-normal text-[#545454]
         flex w-[358px] h-[40px] mt-6 mb-2 p-4 justify-center items-center gap-2 flex-shrink-0
          rounded-[8px] border border-[#4268FB]"
        >
          Edit dietary record
        </button>
        <Link to={`/SelectPreference`}>
          <button
            className="font-manrope text-md font-medium leading-normal
          flex w-[358px] h-[40px] p-4
         justify-center items-center gap-2 flex-shrink-0 rounded-[8px] border bg-[#4268FB]"
          >
            Proceed
          </button>
        </Link>
      </div>

      {successMessage && <Notification message={successMessage} />}
    </div>
  );
};

export default CreateMealPlan;
