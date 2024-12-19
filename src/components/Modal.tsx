import React from "react";
import { X } from "lucide-react";

const Modal = ({ open, setOpen, selectedProduct }) => {
  return (
    <section className="fixed inset-0 z-[99999]   flex justify-center bg-[rgba(0,0,0,.6)]  items-center transition-all ease-in-out duration-500 ">
      <div className="w-[25rem]  bg-white shadow-2xl text-gray-700 px-4 py-4 rounded-lg">
        <div className="flex justify-between py-2">
          <div className="capitalize text-xl font-medium ">
            <h2>product details</h2>
          </div>
          <span className="" onClick={() => setOpen(false)}>
            <X className="text-orange-600" />
          </span>
        </div>
        <div className="py-4 space-y-4">
          <div className="">
            <span className="text-lg capitalize text-gray-700 font-bold"> name :</span>
            <span className="text-sm font-normal text-gray-700 ">
              {" "}
              {selectedProduct?.name}
            </span>

          </div>
          <div>
            <span className="text-lg capitalize font-bold text-gray-700">
              {" "}
              Description:
            </span>
            <span className="text-sm font-normal text-gray-700 ">
              {" "}
              {selectedProduct?.description}
            </span>
          </div>
          <div>
            <span className="text-lg capitalize font-bold text-gray-700">
              {" "}
              Description:
            </span>
            <span className="text-sm font-normal text-gray-700 ">
              {" "}
              {selectedProduct?.description}
            </span>
          </div>
          <div>
            <span className="text-lg font-bold capitalize text-gray-700">price:</span>
            <span className="text-sm font-normal text-gray-700">
              {" "}
              {selectedProduct?.price}
            </span>
          </div>
          <div>
            <span className="text-lg font-bold capitalize text-gray-700">category:</span>
            <span className="text-sm font-normal text-gray-700">
              {" "}
              {selectedProduct?.category.name}
            </span>
          </div>
          <div>
            <span className="text-lg font-bold capitalize text-gray-700">stock:</span>
            <span className="text-sm font-normal text-gray-700">
              {" "}
              {selectedProduct?.stock}
            </span>
          </div>
          <div>
            <span className="text-lg font-bold capitalize text-gray-700">rating:</span>
            <span className="text-sm font-normal text-gray-700">
              {" "}
              {selectedProduct?.rating}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
