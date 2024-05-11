import { Sidebar } from "../Components/Sidebar";
import { PieChart } from "@mui/x-charts/PieChart";
export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <Sidebar tab_index={0} />
        <section className=" ml-12 mr-8 container mx-auto my-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium ">Dashboard</h2>
              </div>
              <p className="mt-1 text-sm">
                Get an overview of everything happening in your lab.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-8">
                <div className=" col-span-3 px-8 pt-8 pb-4 bg-white rounded-lg shadow-md">
                  <h3 className="font-medium leading-6" id="modal-title">
                    Male vs Female Subjects
                  </h3>

                  <p className="mt-2 text-sm ">
                    See and compare how many male and female subjects have been
                    scanned by your lab
                  </p>
                  <div className="mx-auto w-full h-80">
                    <PieChart
                      series={[
                        {
                          data: [
                            { id: 0, value: 10, label: "Male" },
                            { id: 1, value: 15, label: "Female" },
                          ],
                        },
                      ]}
                      width={400}
                      height={200}
                    />
                  </div>
                </div>
                <div className=" col-span-3 px-8 pt-8 pb-4 bg-white rounded-lg shadow-md">
                  <h3 className="font-medium leading-6" id="modal-title">
                    Male vs Female Subjects
                  </h3>

                  <p className="mt-2 text-sm ">
                    See and compare how many male and female subjects have been
                    scanned by your lab
                  </p>
                  <div className="mx-auto w-full h-80">
                    <PieChart
                      series={[
                        {
                          data: [
                            { id: 0, value: 10, label: "Male" },
                            { id: 1, value: 15, label: "Female" },
                          ],
                        },
                      ]}
                      width={400}
                      height={200}
                    />
                  </div>
                </div>
                <div className=" col-span-3 px-8 pt-8 pb-4 bg-white rounded-lg shadow-md">
                  <h3 className="font-medium leading-6" id="modal-title">
                    Male vs Female Subjects
                  </h3>

                  <p className="mt-2 text-sm ">
                    See and compare how many male and female subjects have been
                    scanned by your lab
                  </p>
                  <div className="mx-auto w-full h-80">
                    <PieChart
                      series={[
                        {
                          data: [
                            { id: 0, value: 10, label: "Male" },
                            { id: 1, value: 15, label: "Female" },
                          ],
                        },
                      ]}
                      width={400}
                      height={200}
                    />
                  </div>
                </div>
                <div className=" col-span-3 px-8 pt-8 pb-4 bg-white rounded-lg shadow-md">
                  <h3 className="font-medium leading-6" id="modal-title">
                    Male vs Female Subjects
                  </h3>

                  <p className="mt-2 text-sm ">
                    See and compare how many male and female subjects have been
                    scanned by your lab
                  </p>
                  <div className="mx-auto w-full h-80">
                    <PieChart
                      series={[
                        {
                          data: [
                            { id: 0, value: 10, label: "Male" },
                            { id: 1, value: 15, label: "Female" },
                          ],
                        },
                      ]}
                      width={400}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
