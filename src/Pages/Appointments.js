import React from "react";
import { Sidebar } from "../Components/Sidebar";
import { Appointments } from "../Components/AppointmentPatient";

export default function AppointmentsPagePatient() {
  return (
    <>
      <div className="flex">
        <Sidebar tab_index={2} />
        <section className="ml-12 mr-8 container mx-auto my-8">
          <div className="mb-8">
            <div className="flex items-center gap-x-3">
              <h2 className="text-lg font-medium">Appointments</h2>
            </div>
            <p className="mt-1 text-sm">
              Welcome to your personalized Appointment history.
            </p>
          </div>
          <div>
            <Appointments />
          </div>
        </section>
      </div>
    </>
  );
}
