import React, { useState } from "react";
import { sidebar } from "../constant/sidebar";
import { LayoutDashboard, Menu, Moon, Search } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(0);

  const handleToggleClick = (id: number) => {
    console.log(id);
    setSelectedLink(selectedLink === id ? 0 : id);
  };

  const location = useLocation().pathname;
  let pageTitle = location.replace("/dashboard/", "").split("-").join(" ");

  // con
  return (
    <div className="flex  overflow-hidden relative text-[#E0E0E0] ">
      <div
        className={` container bg-[#343A40]  h-[100vh] sticky left-0 top-0 overflow-hidden ${
          !open ? "w-20" : "w-52"
        } transition-all ease-in-out duration-500 p-3`}
      >
        <div className="  flex justify-between items-center  ">
          <img
            src="/images/logo2.png"
            alt=""
            className={`size-20 object-cover ${!open && "size-14"}`}
          />
        </div>

        <div className=" p-3">
          <h6
            className={`text-sm pb-3 uppercase font-medium ${
              !open && "hidden"
            }`}
          >
            general
          </h6>
          <nav className="flex items-center ">
            <ul className="capitalize w-full">
              <li
                className={`py-3 text-md flex gap-3 ${
                  !open ? "hidden" : "block"
                } `}
              >
                <span>
                  <LayoutDashboard />{" "}
                </span>
                Dashboard
              </li>
              {sidebar.map((sidebarItem) => {
                return (
                  <li
                    key={sidebarItem.id}
                    className="py-3 text-md   cursor-pointer  transition-all duration-500 ease-in-out  "
                  >
                    <div
                      className={`flex justify-between ${
                        !open && "items-center"
                      } `}
                    >
                      <div className="flex space-x-3 hover:text-[#FF851B] ">
                        <span>{sidebarItem.img}</span>
                        <span className={`${!open ? "hidden" : "block"}`}>
                          
                          {sidebarItem.name}
                        </span>
                      </div>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className={`lucide lucide-chevron-down  ${
                          selectedLink === sidebarItem.id && "rotate-180 "
                        }  ${!open ? "hidden" : "block"}`}
                        onClick={() => handleToggleClick(sidebarItem.id)}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                    <ul
                      className={`transition-all ease-in-out duration-500 overflow-hidden ${
                        selectedLink === sidebarItem.id
                          ? "scale-y-100 h-auto  mx-9"
                          : "scale-y-0 h-0"
                      }`}
                    >
                      {sidebarItem.list.map((el) => (
                        <Link to={el.link}>
                          <li key={el.id} className="py-2 ">
                            {el.name}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <div className=" flex-1  bg-stone-200 flex flex-col ">
        <div className="  flex  justify-between items-center p-4">
          <div className="flex gap-4  text-gray-700 items-center">
            <div onClick={() => setOpen(!open)}>
              <Menu />
            </div>
            <span className="text-lg capitalize font-semibold text-gray-700">
              {pageTitle}
            </span>
          </div>
          <div className="flex items-center gap-6 ">
            <div className="flex  gap-3">
              <div className=" py-2 text-gray-600 ">
                <Moon />
              </div>
              <img
                src="https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-10 h-10 rounded-full border-2 object-cover"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                name=""
                id=""
                className=" w-[16rem] rounded-lg py-2 bg-[#000] outline-none px-10 "
                placeholder="search....."
              />
              <span className="absolute top-2 left-0 px-2 ">
                <Search />
              </span>
            </div>
          </div>
        </div>
        {/* main content here  */}
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
