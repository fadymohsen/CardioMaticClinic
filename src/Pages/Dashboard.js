import { Sidebar } from "../Components/Sidebar";
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
