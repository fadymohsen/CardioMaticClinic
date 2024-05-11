import { Sidebar } from "../Components/Sidebar";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
export default function Dashboard() {
  const chartsParams = {
    margin: { bottom: 20, left: 25, right: 5 },
    height: 300,
  };
  return (
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
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 py-8">
              <div className=" col-span-3 px-8 pt-8 pb-4 bg-white rounded-lg shadow-md flex flex-col">
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
              <div className=" col-span-3 px-8 pt-8 pb-4 bg-white rounded-lg shadow-md flex flex-col">
                <h3 className="font-medium leading-6" id="modal-title">
                  Subjects' Age Distribution
                </h3>

                <p className="mt-2 text-sm ">
                  Figure out how many scans were made for each age category.
                </p>
                <div className="mx-auto w-full h-80">
                  <BarChart
                    xAxis={[
                      {
                        scaleType: "band",
                        data: ["group A", "group B", "group C"],
                      },
                    ]}
                    series={[
                      { data: [4, 3, 5] },
                      { data: [1, 6, 3] },
                      { data: [2, 5, 6] },
                    ]}
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div className=" col-span-3 px-8 pt-8 pb-4 bg-white rounded-lg shadow-md flex flex-col">
                <h3 className="font-medium leading-6" id="modal-title">
                  Scan Types Distribution
                </h3>

                <p className="mt-2 text-sm ">
                  Figure out how many scans were made for each scan type.
                </p>
                <div className="mx-auto w-full h-80">
                  <BarChart
                    xAxis={[
                      {
                        scaleType: "band",
                        data: ["group A", "group B", "group C"],
                      },
                    ]}
                    series={[
                      { data: [4, 3, 5] },
                      { data: [1, 6, 3] },
                      { data: [2, 5, 6] },
                    ]}
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div className=" col-span-3 px-8 pt-8 pb-4 bg-white rounded-lg shadow-md flex flex-col">
                <h3 className="font-medium leading-6" id="modal-title">
                  Number of Scans Over The Year
                </h3>

                <p className="mt-2 text-sm ">
                  Plotting the number of scans made in each month of the current
                  year
                </p>
                <div className="mx-auto w-full h-80">
                  <LineChart
                    {...chartsParams}
                    series={[
                      {
                        data: [15, 23, 18, 19, 13],
                        label: "Example",
                        color: "#4e79a7",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
