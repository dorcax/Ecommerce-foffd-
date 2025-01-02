import React, { useState, useEffect } from "react";
import { CloudUpload } from "lucide-react";
import { useParams } from "react-router-dom";
import {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useUpdateCategoryMutation
} from "../../Slices/productSlice";
import { toast } from "react-toastify";
const CreateCategory = () => {
  const { id:string} = useParams();
  const { data: currCategories } = useGetCategoryQuery(id);
  const[updateCategory]=useUpdateCategoryMutation()
  const [data, setData] = useState({ name: "", file: null as File | null });
  const [description, setDescription] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  // handle chhange for dchcescription
  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setDescription(value);
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files[0]);
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setData((prev) => ({ ...prev, file }));
    }
  };
  // fectch detail
  useEffect(() => {
    if (currCategories) {
      setData({
        name: currCategories.name,
        file: currCategories.imageUrl,
      });
      setDescription(currCategories.description);
    }
  }, [currCategories]);
  // handle submission change
  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", description);
    if (data.file) {
      formData.append("file", data.file);
    }

    try {
      const res = await updateCategory({id,formData}).unwrap();
      console.log("category upload", res);
      toast.success("category created successfully");
    } catch (error) {
      console.log("err", error);
      const errorMessage = error?.data?.message;
      toast.error(errorMessage);
    }
  };
  return (
    <section className="overflow-hidden p-4 text-black">
      <form action="" method="post" onSubmit={handleSubmission}>
        <div className="bg-white  h-[20rem] border-2 rounded-lg ">
          <div className="capitalize text-lg font-medium py-2 px-3 text-black border-b">
            category image
          </div>
          <label
            htmlFor="img-file"
            className=" border-2 border-dashed relative rounded  m-4 h-[15rem]  flex flex-col justify-center items-center "
          >
            {data?.file ? (
              <img
                src={URL.createObjectURL(data.file)}
                alt="upload preview"
                className=" object-cover rounded-lg"
                width={150}
                height={20}
              />
            ) : (
              <div className="flex  flex-col items-center  justify-center ">
                <div className="text-[#FF851B] cursor-pointer ">
                  <CloudUpload className="size-16" />
                </div>
                <input
                  type="file"
                  name="file"
                  id="img-file"
                  className="absolute invisible w-full h-full top-0 left-0 z-50"
                  onChange={handleFileChange}
                />
                <div className="text-center text-gray-600  ">
                  <h2 className=" text-2xl font-medium">
                    Drop your images here ,or{" "}
                    <span className="text-[#FF851B] cursor-pointer">
                      click to browse
                    </span>
                  </h2>
                  <p className="my-2  text-sm">
                    1600 * 2000(4:3) recommended :PNG,JPG and JPEG files are
                    allowed
                  </p>
                </div>
              </div>
            )}
          </label>
        </div>
        {/* category image */}
        <div className="bg-white  h-[30rem] border-2 rounded-lg  my-8">
          <div className="capitalize text-lg font-medium py-2 px-3  border-b">
            category description
          </div>
          <div>
            <div className="flex flex-col p-3">
              <label htmlFor="" className="capitalize py-2 text-md ">
                name
              </label>
              <input
                type="text"
                name="name"
                id=""
                className="border-2 w-full max-w-md px-3  capitalize outline-none py-2 rounded-xl"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col p-3">
              <label htmlFor="" className="text-md font-normal py-2 capitalize">
                description
              </label>
              <textarea
                name="description"
                id=""
                value={description}
                onChange={handleDescChange}
                className="border-2 w-full capitalize h-[12rem] bg-gray-100  px-3 outline-none py-2 rounded-xl"
                placeholder="short description about the category"
              ></textarea>
            </div>
            <div className="flex ml-auto  justify-end space-x-3  mr-20 w-[20rem] ">
              <button
                type="submit"
                className=" p-2 mb-2 bg-gray-100 text-sm  capitalize cursor-pointer rounded-lg hover:bg-gray-500 hover:text-white transition-all ease-in-out duration-500"
              >
                create category
              </button>
              <button
                type="button"
                className="border p-2 mb-2  text-sm  capitalize cursor-pointer rounded-lg bg-[#FF851B]  text-white hover:bg-[#ff6f1bfd] transition-all ease-in-out duration-500"
              >
                cancel
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreateCategory;
