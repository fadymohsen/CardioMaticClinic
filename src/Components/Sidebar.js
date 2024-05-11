import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PowerIcon,
  ChartBarIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";

import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { AvatarCustomStyles } from "./Avatar";

export function Sidebar({ tab_index }) {
  // Define the list of menu items
  const menuItems = [
    { icon: ChartBarIcon, text: "Dashboard", path: "/dashboard" },
    { icon: TableCellsIcon, text: "Medical Records", path: "/records" },
  ];

  return (
    <Card className="h-screen w-full max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/5 ">
      <div className="mb-2 p-4">
        <Typography variant="h1" className="text-primary text-center">
          Pulse
        </Typography>
      </div>
      <div className="flex justify-center mb-12 gap-4">
        <AvatarCustomStyles></AvatarCustomStyles>
        <div className="flex flex-col">
          <span className="mx-2 font-medium ">Dr.Mohamed Mosilhy</span>
          <span className="mx-2 text-xs ">Heart Failure Specialist</span>
        </div>
      </div>

      <List className="flex flex-col gap-5 h-4/5 ml-4">
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <ListItem
              className={`flex gap-3 ${
                tab_index === index ? "text-primary" : "bg-white"
              }`}
            >
              <ListItemPrefix>
                <item.icon className="h-6 w-6" />
              </ListItemPrefix>
              {item.text}
            </ListItem>
          </Link>
        ))}
        <hr />
        <Link to={"/"} key={100}>
          <ListItem className="flex gap-3 bg-white">
            <ListItemPrefix>
              <PowerIcon className="h-6 w-6" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}
