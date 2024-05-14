import React from "react";
import { Sidebar } from "../Components/sidebaradmin";
import {PatientList} from '../Components/ViewPatientList';


export default function PatientListPage() {
  return (
    <>
      <div className="flex">
        <Sidebar tab_index={1} /> 
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
