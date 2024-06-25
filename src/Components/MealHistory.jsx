import Savedmeal from "../pages/Savedmeal";

import MealHistoryImage1 from "../assets/meal-history/Meal.Title1.png";
import MealHistoryImage2 from "../assets/meal-history/Meal.Title.png";
import MealHistoryImage3 from "../assets/meal-history/Meal.Title3.png";
import hot from "../assets/meal-history/hot.svg";
import save from "../assets/meal-history/save.svg";

export default function MealPlan() {
  return (
    <div className="mx-4">
      <h1 className="text-base text-[#000000] font-normal mt-[1rem] ">
        Meal History
      </h1>

      <div className="mt-[1rem] relative">
        <div className="absolute bg-white p-[.25rem] gap-[.25rem] items-center flex rounded-lg mt-4 ml-4">
          <img src={save} alt="" className="w-[1.5rem] h-[1.5rem]" />

          <p className="text-black text-[.75rem] font-medium mr-1">Saved</p>
        </div>

        <img
          src={MealHistoryImage1}
          alt=""
          className="h-[8.5rem] w-full rounded-[0.625rem]"
        />

        <div className="my-[.5rem] py-[.25rem]">
          <h1 className="text-[0.875rem] font-semibold mb-[.62rem]">
            Meal.Title
          </h1>

          <div className="flex gap-[.5rem] items-center">
            <p className="p-[.25rem] rounded-[0.25rem] bg-[#F0F6FF] text-[.75rem]">
              Meal Type
            </p>
            <p className="p-[.25rem] rounded-[0.25rem] bg-[#FFF5F0] text-[.75rem]">
              Cuisine tag
            </p>
            <p className="p-[.25rem] rounded-[0.25rem] bg-[#FFF5F0] text-[.75rem]">
              Cuisine tag
            </p>
          </div>

          <div className="flex items-center gap-[.25rem] mt-[.75rem]">
            <img src={hot} alt="" className="w-[1.5rem] h-[1.5rem]" />

            <p className="text-[#000000] text-[.75rem] font-medium ">45mins</p>
          </div>
        </div>
      </div>
      <div className="mt-[1rem]">
        <img
          src={MealHistoryImage2}
          alt=""
          className="h-[8.5rem] w-full rounded-[0.625rem]"
        />

        <div className="my-[.5rem] py-[.25rem]">
          <h1 className="text-[0.875rem] font-semibold mb-[.62rem]">
            Meal.Title
          </h1>

          <div className="flex gap-[.5rem] items-center">
            <p className="p-[.25rem] rounded-[0.25rem] bg-[#F0F6FF] text-[.75rem]">
              Meal Type
            </p>
            <p className="p-[.25rem] rounded-[0.25rem] bg-[#FFF5F0] text-[.75rem]">
              Cuisine tag
            </p>
            <p className="p-[.25rem] rounded-[0.25rem] bg-[#FFF5F0] text-[.75rem]">
              Cuisine tag
            </p>
          </div>

          <div className="flex items-center gap-[.25rem] mt-[.75rem]">
            <img src={hot} alt="" className="w-[1.5rem] h-[1.5rem]" />

            <p className="text-[#000000] text-[.75rem] font-medium ">45mins</p>
          </div>
        </div>
      </div>
      <div className="mt-[1rem]">
        <div className="absolute bg-white p-[.25rem] gap-[.25rem] items-center flex rounded-lg mt-4 ml-4">
          <img src={save} alt="" className="w-[1.5rem] h-[1.5rem]" />

          <p className="text-black text-[.75rem] font-medium mr-1">Saved</p>
        </div>
        <img
          src={MealHistoryImage1}
          alt=""
          className="h-[8.5rem] w-full rounded-[0.625rem]"
        />

        <div className="my-[.5rem] py-[.25rem]">
          <h1 className="text-[0.875rem] font-semibold mb-[.62rem]">
            Meal.Title
          </h1>

          <div className="flex gap-[.5rem] items-center">
            <p className="p-[.25rem] rounded-[0.25rem] bg-[#F0F6FF] text-[.75rem]">
              Meal Type
            </p>
            <p className="p-[.25rem] rounded-[0.25rem] bg-[#FFF5F0] text-[.75rem]">
              Cuisine tag
            </p>
            <p className="p-[.25rem] rounded-[0.25rem] bg-[#FFF5F0] text-[.75rem]">
              Cuisine tag
            </p>
          </div>

          <div className="flex items-center gap-[.25rem] mt-[.75rem]">
            <img src={hot} alt="" className="w-[1.5rem] h-[1.5rem]" />

            <p className="text-[#000000] text-[.75rem] font-medium ">45mins</p>
          </div>
        </div>
      </div>
    </div>
  );
}
