import React from "react";
import { Sidebar } from "../Components/Sidebar";
export default function MedicalRecords() {
  return (
    <>
      <div className="flex">
        <Sidebar tab_index={1} />
        <section className=" ml-12 mr-8 container mx-auto my-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium ">Medical Records</h2>
              </div>
              <p className="mt-1 text-sm">
                Welcome to your personalized medical records history.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}