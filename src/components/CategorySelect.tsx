import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import { useGetCategoriesQuery } from "../Slices/productSlice";

const CategorySelect = ({
  onCategoryChange,
  category,
}: {
  onCategoryChange: (id: string, name: string) => void;
  category: { id: string; name: string };
}) => {
  const { data: categories, isLoading, error } = useGetCategoriesQuery();

  const [isSelectedCategory, setIsSelectedCategory] = useState(false);
  const handleChange = () => {
    setIsSelectedCategory(!isSelectedCategory);
  };
  return (
    <div className="flex flex-col text-gray-700 relative ">
      <button type="button"
        className="border-2 w-full max-w-md px-3 text-sm flex justify-between  capitalize outline-none py-2 rounded-xl"
        onClick={handleChange}
      >
        choose your category
        <span>
          <ChevronUp />
        </span>
      </button>
      {isSelectedCategory && (
        <div className="bg-white shadow-2xl w-[28rem] rounded-xl mt-4 p-4 absolute top-full   left-0">
          <input
            type="search"
            name=""
            id=""
            value={category.name}
            className="border-2 w-full px-3  capitalize outline-none py-2 rounded-xl mb-4"
          />

          <ul className="">
            {categories?.map((el) => (
              <li
                key={el.id}
                className="text-md m-4 capitalize"
                onClick={() => onCategoryChange(el.id, el.name)}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategorySelect;
