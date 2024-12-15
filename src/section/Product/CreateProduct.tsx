import { CloudUpload } from "lucide-react";
import ColorPicker from "../../components/ColorPicker";
import SizePicker from "../../components/SizePicker";
const CreateProduct = () => {
  return (
    <section className="relative overflow-hidden  w-full mt-8">
      {/* add product */}
      <div className="text-gray-700  bg-white shadow-2xl rounded-lg  w-[60rem] h-[20rem] mx-auto  ">
        <div className="font-bold capitalize p-4  border-b text-md">
          add product photo
        </div>
        <label
          htmlFor="img-file"
          className="border-dashed border-2  relative   m-4 h-[14rem]  flex justify-center items-center "
        >
          <div className="flex  flex-col items-center  justify-center ">
            <div className="text-[#FF851B] cursor-pointer ">
              <CloudUpload className="size-16" />
            </div>
            <input
              type="file"
              name=""
              id="img-file"
              className="absolute invisible w-full h-full top-0 left-0 z-50"
            />
            <div className="text-center text-gray-600  ">
              <h2 className=" text-2xl font-medium">
                Drop your images here ,or{" "}
                <span className="text-[#FF851B] cursor-pointer">
                  click to browse
                </span>
              </h2>
              <p className="my-2  text-sm">
                1600 * 2000(4:3) recommended :PNG,JPG and JPEG files are allowed
              </p>
            </div>
          </div>
        </label>
      </div>
      {/* product information */}

      <div className="bg-white shadow-2xl rounded-lg w-[60rem]  mx-auto text-gray-700 my-8">
        <div className=" text-md font-bold p-4 capitalize border-b  ">
          personal information
        </div>
        <div className="grid grid-cols-2 gap-6 p-7 w-full">
          <div className="flex flex-col  ">
            <label htmlFor="" className="text-md font-normal py-2 capitalize">
              product name
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border-2 w-full max-w-md px-3  capitalize outline-none py-2 rounded-xl"
              placeholder="items name"
            />
          </div>
          <div className="flex flex-col  ">
            <label htmlFor="" className="text-md font-normal py-2 capitalize">
              product category
            </label>
            <input
              type="number"
              name=""
              id=""
              className="border-2 w-full max-w-md px-3 capitalize outline-none py-2 rounded-xl"
              placeholder="choose categories"
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="" className="text-md font-normal py-2 capitalize">
              product price
            </label>
            <input
              type="number"
              name=""
              id=""
              className="border-2 w-full max-w-md capitalize  outline-none px-3 py-2 rounded-xl"
              placeholder="price"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-md font-normal py-2 capitalize">
              product stock
            </label>
            <input
              type="number"
              name=""
              id=""
              className="border-2 w-full max-w-md px-3 capitalize outline-none py-2 rounded-xl"
              placeholder="quantity"
            />
          </div>
          <div className="flex ">
          <SizePicker />
          
          </div>
          <div>
          <ColorPicker />
          </div>
        </div>
        <div className="flex flex-col p-7 ">
          <label htmlFor="" className="text-md font-normal py-2 capitalize">
            product description
          </label>
          <textarea
            name=""
            id=""
            className="border-2 w-full capitalize h-[12rem] bg-gray-100  px-3 outline-none py-2 rounded-xl"
            placeholder="short description about the product"
          ></textarea>
        </div>
        <div className="flex ml-auto  justify-end space-x-3  mr-20 w-[20rem] ">
          <button className=" p-2 mb-2 bg-gray-100 text-sm  capitalize cursor-pointer rounded-lg hover:bg-gray-500 hover:text-white transition-all ease-in-out duration-500">
            create product
          </button>
          <button className="border p-2 mb-2  text-sm  capitalize cursor-pointer rounded-lg bg-[#FF851B]  text-white hover:bg-[#ff6f1bfd] transition-all ease-in-out duration-500">
            cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateProduct;
