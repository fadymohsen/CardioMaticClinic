export default function Appointment() {
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Schedule an Appointment
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <label
                  htmlFor="id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ID
                </label>
                <div className="mt-2">
                  <input
                    id="id"
                    name="id"
                    type="text"
                    autoComplete="id"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <label
                  htmlFor="chooseDoctor"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Choose Doctor
                </label>
                <div className="mt-2">
                  <select
                    id="chooseDoctor"
                    name="chooseDoctor"
                    autoComplete="choose-doctor"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="doctor1">Doctor 1</option>
                    <option value="doctor2">Doctor 2</option>
                    <option value="doctor3">Doctor 3</option>
                  </select>
                </div>
              </div>
  
              <div>
                <label
                  htmlFor="chooseDate"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Choose Date
                </label>
                <div className="mt-2">
                  <input
                    id="chooseDate"
                    name="chooseDate"
                    type="date"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <label
                  htmlFor="chooseTime"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Choose Time
                </label>
                <div className="mt-2">
                  <input
                    id="chooseTime"
                    name="chooseTime"
                    type="time"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Schedule Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  