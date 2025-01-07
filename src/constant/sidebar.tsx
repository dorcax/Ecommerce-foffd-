import {
  LayoutDashboard,
  Shirt,
  ShoppingBag,
  ClipboardList,
  Package,
  PartyPopper,
  ReceiptText,
  AppWindow,
} from "lucide-react";

export const sidebar = [
  {
    id: 1,
    name: "products",
    // img: <LayoutDashboard />,
    img: <Shirt />,
    list: [
      {
        id: 1,
        name: "list",
        link: "/list-product",
      },
      
      
      {
        id: 5,
        name: "create",
        link: "/create-product",
      },
    ],
  },
  {
    id: 2,
    name: "category",
    img: <ClipboardList />,
    list: [
      {
        id: 1,
        name: "list",
        link: "/list-categories",
      },
      
      {
        id: 3,
        name: "create",
        link: "/create-category",
      },
    ],
  },
  // {
  //   id: 3,
  //   name: "inventory",
  //   img: <Package />,
  //   list: [
  //     {
  //       id: 1,
  //       name: "warehouse",
  //       link: "/dashboard/product",
  //     },
  //     {
  //       id: 2,
  //       name: "received orders",
  //       link: "/dashboard/product",
  //     },
  //   ],
  // },
  {
    id: 4,
    name: "orders",
    img: <ShoppingBag />,
    list: [
      {
        id: 1,
        name: "list",
        link: "/dashboard/product",
      },
      {
        id: 2,
        name: "details",
        link: "/dashboard/product",
      },
      {
        id: 3,
        name: "cart",
        link: "/dashboard/product",
      },
      {
        id: 4,
        name: "check-out",
        link: "/dashboard/product",
      },
    ],
  },
  
];

export const predefinedColor = [
  "#FF0000",
  "#0000FF",
  "#008000",
  " #FFFF00",
  " #FFA500",
  "#800080",
  "#000000",
  "#FFFFFF",
];



export const predefinedSize=[
  "xs","s","m","xl","xxl","3xl"
]
