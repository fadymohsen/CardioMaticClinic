import React from "react";
import { Sidebar } from "../Components/Sidebar";
import { PatientList } from "../Components/ViewPatientList";

export default function PatientListPage() {
  const role = localStorage.getItem("role");
  return (
    <>
      <div className="flex">
        {role === "patient" && <Sidebar tab_index={1} />}
        {role === "doctor" && <Sidebar tab_index={0} />}
        {role === "admin" && <Sidebar tab_index={1} />}
        <section className="ml-12 mr-8 container mx-auto my-8">
          <div className="mb-8">
            <div className="flex items-center gap-x-3">
              <h2 className="text-lg font-medium">PatientList</h2>
            </div>
            <p className="mt-1 text-sm">
              Welcome to your personalized Prescriptions history.
            </p>
          </div>
          <div>
            <PatientList />
          </div>
        </section>
      </div>
    </>
  );
}
