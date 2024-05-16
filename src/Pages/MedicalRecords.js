import React from "react";
import { Sidebar } from "../Components/Sidebar";
import { MedicalRecord } from "../Components/MedicalRecordsPatient ";

export default function MedicalRecords() {
  const role = localStorage.getItem("role");
  return (
    <>
      <div className="flex">
        {role === "patient" && <Sidebar tab_index={0} />}
        {role === "doctor" && <Sidebar tab_index={1} />}
        <section className=" ml-12 mr-8 container mx-auto my-8 ">
          <div className="mb-8">
          </div>
          <div>
            <MedicalRecord />
          </div>
        </section>
      </div>
    </>
  );
}
