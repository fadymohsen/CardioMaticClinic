import React from "react";
import { Sidebar } from "../Components/Sidebar";
import { Prescriptions } from "../Components/PrescriptionsPatient";

export default function PrescriptionsPage() {
  const role = localStorage.getItem("role");
  return (
    <>
      <div className="flex">
        {role === "patient" && <Sidebar tab_index={1} />}
        {role === "doctor" && <Sidebar tab_index={2} />}
        <section className="ml-12 mr-8 container mx-auto my-8">
          <div className="mb-8">
          </div>
          <div>
            <Prescriptions />
          </div>
        </section>
      </div>
    </>
  );
}
