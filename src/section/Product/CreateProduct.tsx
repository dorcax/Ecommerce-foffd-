import { CloudUpload } from "lucide-react";
const CreateProduct = () => {
  return (
    <section className="relative overflow-hidden  w-full top-[2rem]">
      <div className="container  text-gray-700  bg-white shadow-2xl rounded-lg  w-[60rem] h-[20rem] mx-auto  ">
        <div className="font-bold capitalize p-4  border-b text-md">
          <h1>add product photo</h1>
        </div>
        <label htmlFor="img-file" className="border-dashed border-2 m-4 relative block h-[14rem]  ">
            <div className="flex items-center  justify-center ">
              <CloudUpload />
            </div>
              <input
                type="file"
                name=""
                id="img-file"
                className="absolute invisible w-full  top-0 left-0 z-50"
              />
            <div className="flex justify-center items-center ">
            <h2>drop your images here ,or <span>click browse</span></h2>
            <p>1600 * 2000(4:3) recommended :PNG,JPG and JPEG files are allowed</p>
            </div>
            </label>
      </div>
    </section>
  );
};

export default CreateProduct;
