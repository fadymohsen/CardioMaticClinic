import React from "react";
import { Sidebar } from "../Components/Sidebar";
import { PatientList } from "../Components/ViewPatientList";

export default function PatientListPage() {
  const role = localStorage.getItem("role");

  return (
    <div className="flex">
      {role === "Patient" && <Sidebar tab_index={1} />}
      {role === "PCP" && <Sidebar tab_index={0} />}
      {role === "Admin" && <Sidebar tab_index={1} />}
      <section className="ml-12 mr-8 container mx-auto my-8">
        <div className="mb-8"></div>
        <div>
          <PatientList />
        </div>
      </section>
    </div>
  );
}
