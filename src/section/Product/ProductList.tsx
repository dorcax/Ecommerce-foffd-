import React, { useState,useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Pencil,
  Trash,
  Eye,
  Search,
} from "lucide-react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../Slices/productSlice.ts";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Pagination from "../../components/Pagination.tsx";
import { useLocation,useNavigate} from "react-router-dom";
import { exportToExcel } from 'react-json-to-excel';


// Function to get query parameter from URL

const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const[searchTerm,setSearchTerm]=useState("")
  const location = useLocation();
  const getQueryParams = () => {
  
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get("page") || "1", 10); // Default to page 1
    const limit = parseInt(queryParams.get("limit") || "4", 10); // Default to limit 10
    const search=queryParams.get("search")||""
    return { page, limit,search };
  };
  // Get page and limit from the URL query parameters
  const { page, limit,search } = getQueryParams();
 
  const { data, error, isLoading } = useGetProductsQuery({ page, limit ,search:searchTerm});
  const products = data?.products || [];

  const [deleteProduct] = useDeleteProductMutation();
// search query

  const handleModalChange = (product: any) => {
    console.log("products", product);
    setSelectedProduct(product);
    setIsOpenModal(true);
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      if (window.confirm("are you sure you want to delete this product")) {
        const res = await deleteProduct(id).unwrap();
        toast.success("product deleted");
        console.log("deleted items", res);
      }
    } catch (error) {
      const errorMessage = error?.data?.message.join("\n");
      toast.error(errorMessage);
    }
  };
  const navigate=useNavigate()
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };
  
  useEffect(() => {
    const queryParams = new URLSearchParams();
    if (searchTerm) queryParams.set("search", searchTerm);
    navigate(`?${queryParams.toString()}`);
  }, [searchTerm, navigate]);
  

  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <div className=" overflow-hidden p-4 ">
      <div className="container min-h-screen bg-white rounded-lg relative ">
        <div className="flex justify-between px-3 items-center">
          <div className="flex items-center gap-4">
            <div className="text-[#374151] text-xl capitalize font-medium py-4">
              products
            </div>{" "}
            {/* search bar */}
            <div className="relative">
              <input
                type="text"
                name=""
                id=""
                className="border-2 w-[300px] py-1 rounded-md outline-none px-3 bg-[#F4F5F7] "
                placeholder="search.... "
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <span className="absolute right-3 top-2  ">
                <Search />
              </span>
            </div>
          </div>

          <div className="flex  space-x-4">
            {/* add product button */}
            <button className="px-3  py-1 bg-[#3B82F6] capitalize rounded-xl text-white text-sm">
              <Link to="/create-product">add product</Link>
            </button>
            {/* end of add product button */}
            <div className="relative ">
              <div
                className=" bg-gray-200 text-[#374151] px-2 py-1 rounded-xl  flex  capitalize text-sm items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                this month
                <span className="">
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>
              {isOpen && (
                <div className="absolute right-0 p-3 top-full w-[12rem] border bg-white shadow-2xl z-40  capitalize rounded-md text-gray-600 font-medium">
                  <button className="hover:bg-gray-200 hover:p-1 cursor-pointer" onClick={() => exportToExcel(products, 'downloadfilename')}>
                    Download
                  </button>
           
                </div>
              )}
            </div>
          </div>
        </div>
        <table className="w-full border-collapse text-sm">
          <thead className="border-t border-b text-[#374151] bg-[rgba(234,237,241,.4)] capitalize w-full">
            <tr>
              <th className="p-3 text-left font-medium text-gray-700">
                <input type="checkbox" name="" id="" />
              </th>
              <th className="p-3 text-left ">product name </th>
              <th className="p-3 text-left font-medium text-gray-700">price</th>
              <th className="p-3 text-left font-medium text-gray-700">
                category
              </th>
              <th className="p-3 text-left font-medium text-gray-700">stock</th>
              <th className="p-3 text-left font-medium text-gray-700">
                rating
              </th>
              <th className="p-3 text-left font-medium text-gray-700 ">
                action
              </th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((productItem) => (
              <tr key={productItem?.id} className="border-b text-[#374151] ">
                <td className="p-3">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="p-3 flex items-center space-x-2">
                  <div>
                    <img
                      src={productItem?.imageUrl}
                      alt={productItem?.name}
                      className="size-16 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="text-md  capitalize font-medium">
                      {productItem?.name}
                    </div>
                    {/* <div>
                      Size:
                      <span className="uppercase text-xs">
                        {productItem?.variant}
                      </span>
                    </div> */}
                  </div>
                </td>

                <td className="p-3">${productItem?.price}</td>
                <td className="p-3">{productItem?.category?.name}</td>
                <td className="p-3">{productItem?.stock}</td>
                <td className="p-3">reviews</td>
                <td
                  className="p-3"
                  onClick={() => handleModalChange(productItem)}
                >
                  <Eye />
                </td>

                <td className="p-3 ">
                  <div className="flex space-x-4">
                    <button className=" rounded-lg p-2 bg-[#3B82F6] text-white ">
                      <Link to={`/edit-product/${productItem?.id}`}>
                        {" "}
                        <Pencil className="size-4  " />
                      </Link>
                    </button>
                    <button
                      className=" rounded-lg p-2 bg-[#F87171] text-white"
                      onClick={() => handleDeleteProduct(productItem?.id)}
                    >
                      <Trash className="size-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isOpenModal && (
          <Modal
            open={isOpenModal}
            setOpen={setIsOpenModal}
            selectedProduct={selectedProduct}
          />
        )}
        <Pagination data={data} page={page} limit={limit} />
      </div>
    </div>
  );
};

export default ProductList;
