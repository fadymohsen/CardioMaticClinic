import React from "react";
import AppointmentForm from "../Components/AppointmentForm";
import { Sidebar } from "../Components/Sidebar";


export default function BookAppointment() {
  return (
    <>
      <div className="flex">
        <Sidebar tab_index={4} /> 
        <section className="ml-12 mr-8 container mx-auto my-8">
          <div>
            <AppointmentForm />;
          </div>
        </section>
      </div>
    </>
  );
}
