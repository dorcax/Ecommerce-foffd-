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
      },
      {
        id: 2,
        name: "grid",
      },
      {
        id: 3,
        name: "details",
      },
      {
        id: 4,
        name: "edit",
      },
      {
        id: 5,
        name: "create",
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
      },
      {
        id: 2,
        name: "edit",
      },
      {
        id: 3,
        name: "create",
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
      },
      {
        id: 2,
        name: "received orders",
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
      },
      {
        id: 2,
        name: "details",
      },
      {
        id: 3,
        name: "cart",
      },
      {
        id: 4,
        name: "check-out",
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
      },
      {
        id: 2,
        name: "edit",
      },
      {
        id: 3,
        name: "create",
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
      },
      {
        id: 2,
        name: "orders",
      },
      {
        id: 3,
        name: "return",
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
      },
      {
        id: 2,
        name: "details",
      },
      {
        id: 3,
        name: "create",
      },
    ],
  },
];
{/* <BrainCog /> */}