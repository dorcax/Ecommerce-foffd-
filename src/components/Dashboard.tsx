import React, { useState } from "react";
import { sidebar } from "./sidebar";
import { LayoutDashboard } from "lucide-react";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(0);

  const handleToggleClick = (id: number) => {
    console.log(id);
    setSelectedLink(selectedLink===id?0:id)
  };
  // con
  return (
    <div className="flex container overflow-hidden relative text-[#E0E0E0] ">
      <div
        className={`bg-[#343A40]  min-h-screen ${!open ? "w-24" : "w-60"} p-3`}
      >
        <div className="  flex justify-between items-center  ">
          <img
            src="/images/logo2.png"
            alt=""
            className={`size-20 object-cover ${!open &&"size-14"}`}
          />
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
            className={`lucide lucide-square-chevron-right ${
              open && "rotate-180"
            } `}
            onClick={() => setOpen(!open)}
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m10 8 4 4-4 4" />
          </svg>
        </div>

        <div className="py-6 px-3">
          <h6 className={`text-sm pb-3 uppercase font-medium ${!open&&"hidden"}`}>general</h6>
          <nav className="flex ">
            <ul className="capitalize w-full">
              <li className={`py-4 text-md flex gap-3 ${!open?"hidden":"block"} `}><span><LayoutDashboard/> </span>
              Dashboard</li>
              {sidebar.map((sidebarItem) => {
                return (
                  <li
                    key={sidebarItem.id}
                    className="py-4 text-md   cursor-pointer  transition-all duration-500 ease-in-out  "
                  >
                    <span className="flex justify-between  ">
                      <span className={`hover:text-[#FF851B] flex gap-3 ${!open&&"items-center"}`}>
                        {sidebarItem.img}
                      <span className={`${!open?"hidden":"block"}`}>  {sidebarItem.name}</span>
                      </span>

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
                        }  ${!open?"hidden":"block"}`  }
                        onClick={() => handleToggleClick(sidebarItem.id)}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                    <ul
                      className={`transition-all ease-in-out duration-500 overflow-hidden ${
                        selectedLink === sidebarItem.id
                          ? "scale-y-100 h-auto  mx-9"
                          : "scale-y-0 h-0"
                      }`}
                    >
                      {sidebarItem.list.map((el) => (
                        <li key={el.id} className="py-2 ">
                          {el.name}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
         
            </ul>
          </nav>
        </div>
      </div>

      <div className=" flex-1">welcome</div>
    </div>
  );
};

export default Dashboard;
