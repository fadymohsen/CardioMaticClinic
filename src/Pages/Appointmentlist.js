import React from "react";
import { Sidebar } from "../Components/sidebaradmin";
import {Appointments} from '../Components/AppointmentAdmin';


export default function AppointmentsListPage() {
  return (
    <>
      <div className="flex">
        <Sidebar tab_index={3} /> 
        <section className="ml-12 mr-8 container mx-auto my-8">
          <div className="mb-8">
            <div className="flex items-center gap-x-3">
              <h2 className="text-lg font-medium">Appointments List</h2>
            </div>
            <p className="mt-1 text-sm">
              Welcome to your personalized Prescriptions history.
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
