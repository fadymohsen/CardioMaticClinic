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
  UserIcon,
  CalendarIcon,
  PlusCircleIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { AvatarCustomStyles } from "./Avatar";
import cardiomaticLogo from "../Assets/mainLogo.png";

export function Sidebar({ tab_index }) {
  let role = localStorage.getItem("role");
  // Define the list of menu items
  let menuItems = [];

  function handleLogout() {
    // Perform any actions needed for logout
    localStorage.setItem("role", "");
  }

  const menuItemsPatient = [
    {
      icon: ClipboardDocumentListIcon,
      text: "Medical Records",
      path: "/Records",
    },
    {
      icon: ClipboardDocumentListIcon,
      text: "Prescriptions",
      path: "/Prescriptions",
    },
    { icon: CalendarIcon, text: "Appointments", path: "/AppointmentsPatient" },
    {
      icon: PlusCircleIcon,
      text: "Book Appointment",
      path: "/BookAppointment",
    },
  ];

  const menuItemsAdmin = [
    { icon: ChartBarIcon, text: "Statistics", path: "/Statistics" },
    { icon: UserIcon, text: "Patients List", path: "/ViewPatient" },
    { icon: UserIcon, text: "Doctors List", path: "/ViewDoctor" },
    { icon: CalendarIcon, text: "Appointments", path: "/ViewAppointments" },
    { icon: CurrencyDollarIcon, text: "Invoice", path: "/Invoice" },
  ];

  const menuItemsDoctor = [
    { icon: UserIcon, text: "Patients List", path: "/ViewPatient" },
    {
      icon: ClipboardDocumentListIcon,
      text: "Medical Records",
      path: "/records",
    },
    {
      icon: ClipboardDocumentListIcon,
      text: "Prescriptions",
      path: "/Prescriptions",
    },
    { icon: CalendarIcon, text: "Appointments", path: "/ViewAppointments" },
  ];

  switch (role) {
    case "Admin":
      menuItems = menuItemsAdmin;
      break;
    case "Patient":
      menuItems = menuItemsPatient;
      break;
    case "PCP":
      menuItems = menuItemsDoctor;
      break;
    default:
      break;
  }

  return (
    <Card className="h-screen  w-full max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/5 sticky top-0 ">
      <div className="mb-2 p-4 text-center">
        <Typography variant="h2">
          <Link to={"/"} className="text-primary text-center">
            <img
              src={cardiomaticLogo}
              alt="CardioMatic Logo"
              className="w-10 h-10 inline-block mr-2"
            />
            CardioMatic
          </Link>
        </Typography>
      </div>
      <List className="flex flex-col gap-5 h-4/5 ">
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
        <Link to="/" onClick={handleLogout}>
          <ListItem className="flex gap-3 bg-white">
            <ListItemPrefix>
              <PowerIcon className="h-6 w-6" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </Link>
      </List>
      <div className="flex justify-center mb-8 gap-4">
        <AvatarCustomStyles></AvatarCustomStyles>
        <div className="flex flex-col">
          <span className="mx-2 font-medium ">{role}</span>
        </div>
      </div>
    </Card>
  );
}
