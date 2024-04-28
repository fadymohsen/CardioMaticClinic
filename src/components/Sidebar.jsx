import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Inside your Sidebar component
Sidebar.propTypes = {
  currentLinkId: PropTypes.number.isRequired, // Assuming currentLinkId is a number
};

const navigationLinks = [
  {
    id: 0,
    name: "Add Patient",
    icon: (
      <svg
        width="18px"
        height="17px"
        viewBox="0 0 21 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-419.000000, -800.000000)"
            fill="currentColor"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M374.55,657 C374.55,657.552 374.0796,658 373.5,658 C372.9204,658 372.45,657.552 372.45,657 L372.45,643 C372.45,642.448 372.9204,642 373.5,642 C374.0796,642 374.55,642.448 374.55,643 L374.55,657 Z M374.55,640 L372.45,640 C371.28975,640 370.35,640.895 370.35,642 L370.35,658 C370.35,659.105 371.28975,660 372.45,660 L374.55,660 C375.71025,660 376.65,659.105 376.65,658 L376.65,642 C376.65,640.895 375.71025,640 374.55,640 L374.55,640 Z M367.2,657 C367.2,657.552 366.7296,658 366.15,658 C365.5704,658 365.1,657.552 365.1,657 L365.1,647 C365.1,646.448 365.5704,646 366.15,646 C366.7296,646 367.2,646.448 367.2,647 L367.2,657 Z M367.2,644 L365.1,644 C363.93975,644 363,644.895 363,646 L363,658 C363,659.105 363.93975,660 365.1,660 L367.2,660 C368.36025,660 369.3,659.105 369.3,658 L369.3,646 C369.3,644.895 368.36025,644 367.2,644 L367.2,644 Z M381.9,657 C381.9,657.552 381.4296,658 380.85,658 C380.2704,658 379.8,657.552 379.8,657 L379.8,653 C379.8,652.448 380.2704,652 380.85,652 C381.4296,652 381.9,652.448 381.9,653 L381.9,657 Z M381.9,650 L379.8,650 C378.63975,650 377.7,650.895 377.7,652 L377.7,658 C377.7,659.105 378.63975,660 379.8,660 L381.9,660 C383.06025,660 384,659.105 384,658 L384,652 C384,650.895 383.06025,650 381.9,650 L381.9,650 Z"
                id="stats-[#1371]"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    ),
    href: "/Addpatient",
  },
  {
    id: 1,
    name: "Appointment",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    href: "/Appointment",
  },
  {
    id: 2,
    name: "Contact",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    href: "/Contact",
  },
];

export default function Sidebar({ currentLinkId }) {
  // const currDoctor = JSON.parse(localStorage.getItem("current_doctor"));

  return (
    <aside className="flex fixed flex-col w-60 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <a href="#" className="block mx-auto my-3">
        <img
          className="w-auto h-8 sm:h-9"
          src="https://merakiui.com/images/logo.svg"
          alt=""
        />
      </a>

      <div className="flex flex-col justify-between flex-1 mt-14">
        <nav>
          {navigationLinks.map((link) => {
            const style =
              currentLinkId === link.id
                ? "flex items-center px-4 py-2 mb-5 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                : "flex items-center px-4 py-2 mb-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700";

            return (
              <Link key={link.id} className={style} href={link.href}>
                {link.icon}
                <span className="mx-4 font-medium">{link.name}</span>
              </Link>
            );
          })}

          <hr className="my-6 border-gray-200 dark:border-gray-600" />

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="/"
          >
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                fill="currentColor"
              ></path>
            </svg>

            <span className="mx-4 font-medium">Logout</span>
          </Link>
        </nav>

        {/* <a href="#" className="flex items-center px-4 -mx-2">
          <div className="flex flex-col">
            <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
              Dr. {currDoctor["name"]}
            </span>
            <span className="mx-2 text-xs text-gray-500 dark:text-gray-200">
              {currDoctor["specialization"]}
            </span>
          </div>
        </a> */}
      </div>
    </aside>
  );
}
