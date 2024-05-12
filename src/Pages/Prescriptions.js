import React from "react";
import { Sidebar } from "../Components/Sidebar";
import { Prescriptions } from '../Components/Table2';

export default function PrescriptionsPage() {
  return (
    <>
      <div className="flex">
        <Sidebar tab_index={2} /> 
        <section className="ml-12 mr-8 container mx-auto my-8">
          <div className="mb-8">
            <div className="flex items-center gap-x-3">
              <h2 className="text-lg font-medium">Prescriptions</h2>
            </div>
            <p className="mt-1 text-sm">
              Welcome to your personalized Prescriptions history.
            </p>
          </div>
          <div>
            <Prescriptions />
          </div>
        </section>
      </div>
    </>
  );
}
