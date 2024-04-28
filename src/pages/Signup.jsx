export default function SignUp() {
  return (
    <>
      <main>
        <div className="w-full mt-8 max-w-sm  mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="px-6 py-4">
            <div className="flex justify-center mx-auto">
              <img
                className="w-auto h-7 sm:h-12 mb-3"
                src="src\assets\pulse-eft-network-seeklogo.svg"
                alt=""
              />
            </div>

            <form className="space-y-6" action="#" method="POST">
              <h2 className=" mt-3 text-2xl font-medium text-center text-gray-600 dark:text-gray-200">
                Sign up to your account
              </h2>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="block dark:text-white text-sm font-medium leading-6 text-gray-900"
                >
                  Age
                </label>
                <div className="mt-2">
                  <input
                    id="age"
                    name="age"
                    type="number"
                    autoComplete="age"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="gender"
                  className="block dark:text-white text-sm font-medium leading-6 text-gray-900"
                >
                  Gender
                </label>
                <div className="mt-2">
                  <select
                    id="gender"
                    name="gender"
                    autoComplete="gender"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contactInfo"
                  className="block dark:text-white text-sm font-medium leading-6 text-gray-900"
                >
                  Contact Info
                </label>
                <div className="mt-2">
                  <input
                    id="contactInfo"
                    name="contactInfo"
                    type="text"
                    autoComplete="contact-info"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="medicalHistory"
                  className="block dark:text-white text-sm font-medium leading-6 text-gray-900 "
                >
                  Medical History
                </label>
                <div className="mt-2">
                  <textarea
                    id="medicalHistory"
                    name="medicalHistory"
                    autoComplete="medical-history"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <input
                  type="submit"
                  className="mx-auto text-center px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  value="Sign Up"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
