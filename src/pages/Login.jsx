/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <main>
        <div className="w-full mt-40 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="px-6 py-4">
            <div className="flex justify-center mx-auto">
              <img
                className="w-auto h-7 sm:h-12 mb-3"
                src="src\assets\pulse-eft-network-seeklogo.svg"
                alt=""
              />
            </div>

            <h3 className="mt-3 text-2xl font-medium text-center text-gray-600 dark:text-gray-200">
              Welcome back to Pulse
            </h3>

            <p className="mt-1 px-3 text-center text-sm text-gray-500 dark:text-gray-400">
              Use your doctor or technician account to access dashboard
            </p>

            <form>
              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
              </div>

              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                />
              </div>
              <div>
                <NavLink
                  to={"/dashboard"}
                  className="flex items-center justify-between mt-4"
                >
                  <button
                    type="submit"
                    className="mx-auto text-center px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Sign In
                  </button>
                </NavLink>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-200">
              Don't have an account?{" "}
            </span>
            <NavLink
              className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
              to="/signup"
            >
              Request one.
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
}
