import React, { useState } from "react";
import { useDeleteCategoryMutation, useGetCategoriesQuery } from "../../Slices/productSlice";
import{Trash,Pencil,Eye,Plus} from "lucide-react"
import { toast } from "react-toastify";

const CategoryList = () => {
  const { data: categories, isLoading, error } = useGetCategoriesQuery();
  const[deleteCategory] =useDeleteCategoryMutation()
  const [selectedAction, setSelectedAction] = useState<string>(null);

  // handle action change
  const handleActionChange = (id: string) => {
    setSelectedAction(selectedAction === id ? null : id);
  };
  // hanmdle category delete 
  const handleDeleteCategory =async(id:string)=>{
     try {
      const res =await deleteCategory(id).unwrap()
      console.log("res",res)
      toast.success("product deleted successfully")
     } catch (error) {
      const errorMessage=error?.data?.message
      toast.error(errorMessage)
     }
  }
  return (
    <section className="overflow-hidden p-4">
      <div className="bg-white rounded-lg min-h-screen border-2 ">
        <div className="flex justify-between items-center p-6 ">
          <input
            type="text"
            name=""
            id=""
            className="border-2 w-64 py-1 rounded-lg px-2 text-black outline-[#FF851B]"
            placeholder="filter by name..."
          />
          <div className="flex gap-4 bg-[#FF851B] py-1 px-4 capitalize rounded-md">
            new{" "}
            <span>
              <Plus />
            </span>
          </div>
        </div>
        {/* table  */}
        <table className="border-collapse w-full text-sm text-black capitalize ">
          <thead className="bg-[rgba(234,237,241,.4)] text-gray-600 border-y capitalize">
            <tr>
              <th className="px-2 text-left font-medium text-gray-700">
                <input type="checkbox" name="" id="" />
              </th>
              <th className="text-left p-3 font-medium text-gray-700">name</th>
              <th className="p-3 text-left font-medium text-gray-700">image</th>
              <th className="font-medium text-gray-700 p-3 text-left">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((category) => (
              <tr key={category.id} className="border-b">
                <td className="px-2">
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{category.name}</td>
                <td className="p-3 flex items-center space-x-2">
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="size-16 rounded-md object-cover"
                  />
                </td>
                <td className="p-3 relative">
                  <div
                    className={`text-lg  w-8 
                     flex items-center justify-center rounded-md p-1 ${selectedAction ===category.id ?" border-2 border-black":"hover:bg-gray-100 hover:border"}`}
                    onClick={() => handleActionChange(category.id)}
                  >
                    ...
                  </div>

                  {selectedAction === category.id && (
                    <div className="border bg-white w-32 absolute  left-[-6rem] top-20 shadow-xl rounded-md">
                      <ul className="flex flex-col capitalize ">
                     
                        <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      edit
                        </li>
                        <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={()=>handleDeleteCategory(category.id)}>
                        delete
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CategoryList;
