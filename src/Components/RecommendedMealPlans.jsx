import { useEffect, useState } from "react";
import React from "react";
import data from "./CommunityComp/data";

const filterKey = [
  {
    title: "Recommended",
    filter: true,
  },
  {
    title: " Popular",
    filter: true,
  },
  {
    title: " Classic",
    filter: true,
  },
  {
    title: " Flexitaria",
    filter: true,
  },
  {
    title: " Popular",
    filter: true,
  },
];
function Searchbar({ setInputValue }) {
  return (
    <div className="flex gap-4  items-center mt-[2rem] mb-6">
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for your meal..."
        className=" border outline-none border-[#F4F4F4d] py-2 px-4 w-80 rounded-lg text-[#777777] bg-[#F4F4F4]"
      />
      <div className="py-2 px-4 bg-[#F4F4F4] rounded-lg h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.6em"
          height="1.6em"
          viewBox="0 0 16 16"
        >
          <path
            fill="#4268FB"
            d="M.75 3h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5M3 7.75A.75.75 0 0 1 3.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 7.75m3 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75"
          />
        </svg>
      </div>
    </div>
  );
}

function MealList(props) {
  const { el } = props;
  const { image, title, foodType, country } = el;
  console.log(props.title);
  return (
    <div className="flex gap-2 my-6">
      <img
        src={image}
        className="max-w-[104px]  max-h-[288px] w-full  rounded-md"
        alt=""
        loading="lazy"
      />

      <div>
        <p className="   text-black-600 font-Manrope   font-semibold">
          {title}
        </p>
        <div className="flex self-start p-1 gap-6 text-[10px] font-semibold">
          <span className="bg-[#F0F6FF] p-1 rounded-md"> {foodType}</span>
          <span className="bg-[#FFF0F0] p-1 rounded-md">{country}</span>
        </div>
        <p className="text-[10px]  flex  items-center gap-1 max-w-24 bg-[#CDFFCB] font-semibold p-1 rounded-md">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="black"
                stroke-width="2"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10ZM7 12l4 3l5-7"
              />
            </svg>
          </span>
          {props.title === "recommended" ? "Recommended" : props.title}
        </p>
      </div>
    </div>
  );
}

function RecommendedMealPlans() {
  const [myData, setMyData] = useState(data);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("Recommended");

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const dat = data.filter(
        (el) =>
          el.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          el.country.toLowerCase().includes(inputValue.toLowerCase()) ||
          el.foodType.toLowerCase().includes(inputValue.toLocaleLowerCase())
      );

      setMyData((prev) => dat);
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  const handleFilter = (filterBy) => {
    const title = filterBy.title.toLowerCase().trim();
    const filter = filterBy.filter;
    setMyData([]);
    setTitle(title);
    setLoading(true);
    setTimeout(() => {
      const filterItems = data.filter((obj) => obj[title] === filter);
      setMyData(filterItems);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div>
        <Searchbar setInputValue={setInputValue} />
      </div>
      <hr />
      <div className="mt-[1rem]">
        <ul className="flex gap-3   list-none overflow-x-scroll">
          {filterKey.map((el, i) => (
            <li
              key={i}
              onClick={() => handleFilter(el)}
              className={`py-2 px-4  cursor-pointer bg-[#F4F4F4] border bottom-2  hover:border-[#4268FB] text:[#777777] hover:text-[#4268FB] rounded-2xl  ${
                title.trim() === el.title.toLowerCase().trim() ||
                title === el.title
                  ? "border-[#4268FB] "
                  : ""
              }`}
            >
              {el.title}
            </li>
          ))}
        </ul>
      </div>
      <h1 className="text-3xl capitalize text-black font-Manrope font-bold mt-4 mb-4">
        {title} Meal Plans
      </h1>
      {/* recomended meal plan */}
      {loading && (
        <div className="flex justify-center items-center w-[50vh]">
          <h6>Loading....</h6>
        </div>
      )}
      <div>
        {!loading && myData.length > 0 && (
          <div>
            {myData.map((el) => {
              return (
                <div>
                  <MealList key={el.id} el={el} title={title} />
                </div>
              );
            })}
          </div>
        )}

        {!loading && myData.length < 1 && (
          <div className=" h-[50vh] flex justify-center items-center">
            No meal found
          </div>
        )}
      </div>
    </>
  );
}

export default RecommendedMealPlans;
