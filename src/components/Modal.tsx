import React from "react";
import { X } from "lucide-react";

const Modal = ({ open, setOpen, selectedProduct }) => {
  return (
    <section className="fixed inset-0 z-[99999]   flex justify-center bg-[rgba(0,0,0,.6)]  items-center transition-all ease-in-out duration-500 ">
      <div className="w-[25rem]  bg-white shadow-2xl text-[#374151] px-4 py-4 rounded-lg">
        <div className="flex justify-between py-2 border-b">
          <div className="capitalize text-xl font-medium ">
            <h2>product details</h2>
          </div>
          <span className="" onClick={() => setOpen(false)}>
            <X className="text-[#F87171]" />
          </span>
        </div>
        <div className="py-2 space-y-2">
          <div className="">
            <span className="text-md capitalize text-[#374151] font-medium"> name :</span>
            <span className="text-sm font-normal text-[#374151] capitalize ">
              {" "}
              {selectedProduct?.name}
            </span>

          </div>
          <div>
            <span className="text-md capitalize font-medium text-[#374151]">
              {" "}
              product image
            </span>
            <img src={selectedProduct?.imageUrl} alt={selectedProduct?.name} width={150} height={30} />
          </div>
          
          
          <div>
            <span className="text-md capitalize font-medium text-[#374151]">
              {" "}
              Description:
            </span>
            <span className="text-sm font-normal text-[#374151]  ">
              {" "}
              {selectedProduct?.description}
            </span>
          </div>
          <div>
            <span className="text-md font-medium capitalize text-[#374151]">price:</span>
            <span className="text-sm font-normal text-[#374151]">
              {" "}
              {selectedProduct?.price}
            </span>
          </div>
          <div>
            <span className="text-md font-medium capitalize text-[#374151]">category:</span>
            <span className="text-sm font-normal text-[#374151] capitalize">
              {" "}
              {selectedProduct?.category.name}
            </span>
          </div>
          <div>
            <span className="text-md font-medium capitalize text-[#374151]">stock:</span>
            <span className="text-sm font-normal text-[#374151]">
              {" "}
              {selectedProduct?.stock}
            </span>
          </div>
          <div>
            <span className="text-md font-medium capitalize text-[#374151]">rating:</span>
            <span className="text-sm font-normal text-[#374151]">
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
