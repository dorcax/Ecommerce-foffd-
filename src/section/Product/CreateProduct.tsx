import { CloudUpload } from "lucide-react";
import ColorPicker from "../../components/ColorPicker";
import SizePicker from "../../components/SizePicker";
import CategorySelect from "../../components/CategorySelect";
import React, { useState } from "react";
import { useCreateProductMutation } from "../../Slices/productSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreateProduct = () => {
  const [createProduct] = useCreateProductMutation();
  const [data, setData] = useState({
    name: "",
    price: "",
    file: null as File | null,
    stock: "",
  });

  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<{
    id: string;
    name: string;
  }>({
    id: "",
    name: "",
  });
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [formError, setFormError] = useState<{ [key: string]: string }>({});
  const handleChangeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setDescription(value);
  };

  // handle change for onChange event for input

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (id: string, name: string) => {
    setSelectedCategory(() => ({ id, name }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files[0]);
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setData((prev) => ({ ...prev, file }));
    }
  };

  // selected size

  const handleSizeChange = (size: string) => {
    console.log("size", size);

    setSelectedSize(size);
  };
  // selected color

  const handleSelectedColor = (color: string) => {
    console.log("color", color);

    setSelectedColor(color);
  };

  // validate error

  interface ProductData {
    name: string;
    description: string;
    price: number;
    stock: number;
    categoryId: string;
    color: string;
    variant: string;
    file: File | null;
  }

  const validate = (data: ProductData) => {
    const errors: { [key: string]: string } = {};
    if (!data.name) {
      errors.name = "product name is required";
    }
    if (!data.description) {
      errors.description = "description is required";
    }
    if (!data.price) {
      errors.price = "price is required ";
    }
    if (!data.categoryId) {
      errors.categoryId = "category is required";
    }
    if (!data.variant) {
      errors.variant = "product size is required";
    }
    if (!data.file) {
      errors.file = "product image is required";
    }
    if (!data.stock) {
      errors.stock = "product stock is required";
    }
    if (!data.color) {
      errors.color = "product color is required";
    }
    return errors;
  };
  // handle submission

  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const validateError = validate({
    //   name: data.name,
    //   price: parseFloat(data.price),
    //   stock: parseInt(data.stock),
    //   categoryId: selectedCategory.id,
    //   description: description,
    //   color: selectedColor,
    //   variant: selectedSize,
    //   file: data.file,
    // });
    // const validateErrors=validate(validateError)
    // setFormError(validateError);

    // if there is no error,create the product

    // if (Object.keys(validateError).length > 0) {
    //   return;
    // }

    console.log("Data: ", data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("color", selectedColor);
    formData.append("variant", selectedSize);
    formData.append("categoryId", selectedCategory.id);
    formData.append("description", description);

    if (data.file) {
      formData.append("file", data.file);
    }
    try {
      const res = await createProduct(formData).unwrap();
      toast.success("product uploaded successfully");
      console.log("Product uploaded successfully:", res);
    } catch (error) {
      const errorMessage = error?.data?.message?.join("\n");

      toast.error(errorMessage);
    }
  };

  return (
    <section className="px-4 relative overflow-hidden  mt-8">
      {/* add product */}
      <form action="" method="post" onSubmit={handleFormSubmission}>
        <div className="text-gray-700  bg-white shadow-2xl rounded-lg  w-full h-[20rem]  ">
          <div className="font-bold capitalize p-4  border-b text-xl">
            add product photo
          </div>
          <label
            htmlFor="img-file"
            className="border-dashed border-2  relative   m-4 h-[14rem]  flex flex-col justify-center items-center "
          >
            <div className="flex  flex-col items-center  justify-center ">
              {data?.file ? (
                <img src={URL.createObjectURL(data.file)} 
                alt="upload preview"
                className=" object-cover rounded-lg"
                width={150}
                height={20}/>
              ):( <div>
                <div className="text-[#FF851B] cursor-pointer ">
                <CloudUpload className="size-16" />
              </div>
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
            ) }
              <input
                type="file"
                name="file"
                id="img-file"
                className="absolute invisible w-full h-full top-0 left-0 z-50"
                onChange={handleFileChange}
              />
             
             
            </div>
            {/* {formError.file && <div className="text-red-600">{formError.file}</div>} */}
          </label>
        </div>
        {/* product information */}

        <div className="bg-white shadow-2xl rounded-lg w-full  text-gray-700 my-8">
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
                name="name"
                value={data.name}
                id=""
                className="border-2 w-full max-w-md px-3  capitalize outline-none py-2 rounded-xl"
                placeholder="items name"
                onChange={handleInputChange}
              />
              {/* {formError.name && <div className="text-red-600">{formError.name}</div>} */}
            </div>
            <div className="flex flex-col  ">
              <label htmlFor="" className="text-md font-normal py-2 capitalize">
                {" "}
                product Category{" "}
              </label>
              <CategorySelect
                category={selectedCategory}
                onCategoryChange={handleCategoryChange}
              />
              {/* {formError.categoryId && <div className="text-red-600">{formError.categoryId}</div>} */}
            </div>

            <div className="flex flex-col ">
              <label htmlFor="" className="text-md font-normal py-2 capitalize">
                product price
              </label>
              <input
                type="number"
                name="price"
                value={data.price}
                id=""
                className="border-2 w-full max-w-md capitalize  outline-none px-3 py-2 rounded-xl"
                placeholder="price"
                onChange={handleInputChange}
              />
              {/* {formError.price && <div className="text-red-600">{formError.price}</div>} */}
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-md font-normal py-2 capitalize">
                product stock
              </label>
              <input
                type="number"
                name="stock"
                value={data.stock}
                id=""
                className="border-2 w-full max-w-md px-3 capitalize outline-none py-2 rounded-xl"
                placeholder="quantity"
                onChange={handleInputChange}
              />
              {/* {formError.stock && <div className="text-red-600">{formError.stock}</div>} */}
            </div>
            <div className=" flex flex-col ">
              <SizePicker
                handleSizeChange={handleSizeChange}
                selectedSize={selectedSize}
              />
              {/* {formError.variant && <div className="text-red-600">{formError.variant}</div>} */}
            </div>
            <div>
              <ColorPicker
                handleSelectedColor={handleSelectedColor}
                selectedColor={selectedColor}
              />
              {/* {formError.color && <div className="text-red-600">{formError.color}</div>} */}
            </div>
          </div>
          <div className="flex flex-col p-7 ">
            <label htmlFor="" className="text-md font-normal py-2 capitalize">
              product description
            </label>
            <textarea
              name="description"
              id=""
              value={description}
              onChange={handleChangeDesc}
              className="border-2 w-full capitalize h-[12rem] bg-gray-100  px-3 outline-none py-2 rounded-xl"
              placeholder="short description about the product"
            ></textarea>
            {/* {formError.description && <div className="text-red-600">{formError.description}</div>} */}
          </div>
          <div className="flex ml-auto  justify-end space-x-3  mr-20 w-[20rem] ">
            <button
              type="submit"
              className=" p-2 mb-2 bg-gray-100 text-sm  capitalize cursor-pointer rounded-lg hover:bg-gray-500 hover:text-white transition-all ease-in-out duration-500"
            >
              create product
            </button>
            <button
              type="button"
              className="border p-2 mb-2  text-sm  capitalize cursor-pointer rounded-lg bg-[#FF851B]  text-white hover:bg-[#ff6f1bfd] transition-all ease-in-out duration-500"
            >
              cancel
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreateProduct;
