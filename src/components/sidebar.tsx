import { LayoutDashboard,Shirt,ShoppingBag ,ClipboardList,Package,PartyPopper,ReceiptText,AppWindow} from "lucide-react";

export const sidebar = [
  {
    id: 1,
    name: "products",
    // img: <LayoutDashboard />,
    img:<Shirt />,
    list: [
      {
        id: 1,
        name: "list",
        link:"/dashboard/list-product"
      },
      {
        id: 2,
        name: "grid",
        link:"/dashboard/create-product"
      },
      {
        id: 3,
        name: "details",
        link:"/dashboard/product"
      },
      {
        id: 4,
        name: "edit",
        link:"/dashboard/product"
      },
      {
        id: 5,
        name: "create",
        link:"/dashboard/create-product"
      },
    ],
  },
  {
    id: 2,
    name: "category",
    img:<ClipboardList />,
    list: [
      {
        id: 1,
        name: "list",
        link:"/dashboard/product"
      },
      {
        id: 2,
        name: "edit",
        link:"/dashboard/product"
      },
      {
        id: 3,
        name: "create",
        link:"/dashboard/product"
      },
    ],
  },
  {
    id: 3,
    name: "inventory",
    img:<Package />,
    list: [
      {
        id: 1,
        name: "warehouse",
        link:"/dashboard/product"
      },
      {
        id: 2,
        name: "received orders",
        link:"/dashboard/product"
      },
    ],
  },
  {
    id: 4,
    name: "orders",
    img:<ShoppingBag />,
    list: [
      {
        id: 1,
        name: "list",
        link:"/dashboard/product"
      },
      {
        id: 2,
        name: "details",
        link:"/dashboard/product"
      },
      {
        id: 3,
        name: "cart",
        link:"/dashboard/product"

      },
      {
        id: 4,
        name: "check-out",
        link:"/dashboard/product"
      },
    ],
  },
  {
    id: 5,
    name: "attributes",
    img:<PartyPopper />,
    list: [
      {
        id: 1,
        name: "list",
        link:"/dashboard/product"
      },
      {
        id: 2,
        name: "edit",
        link:"/dashboard/product"
      },
      {
        id: 3,
        name: "create",
        link:"/dashboard/product"
      },
    ],
  },
  {
    id: 6,
    name: "purchases",
    img:<AppWindow />,
    list: [
      {
        id: 1,
        name: "list",
        link:"/dashboard/product"
      },
      {
        id: 2,
        name: "orders",
        link:"/dashboard/product"
      },
      {
        id: 3,
        name: "return",
        link:"/dashboard/product"
      },
    ],
  },
  {
    id: 7,
    name: "invoices",
    img:<ReceiptText />,
    list: [
      {
        id: 1,
        name: "list",
        link:"/dashboard/product"
      },
      {
        id: 2,
        name: "details",
        link:"/dashboard/product"
      },
      {
        id: 3,
        name: "create",
        link:"/dashboard/product"
      },
    ],
  },
];
{/* <BrainCog /> */}