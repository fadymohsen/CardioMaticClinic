import React from "react";
import { Sidebar } from "../Components/Sidebar";
import { Appointments } from "../Components/Appointments";

export default function AppointmentsListPage() {
  return (
    <>
      <div className="flex">
        <Sidebar tab_index={3} />
        <section className="ml-12 mr-8 container mx-auto my-8">
          <div className="mb-8"></div>
          <div>
            <Appointments />
          </div>
        </section>
      </div>
    </>
  );
}
