import React from "react";
import { Sidebar } from "../Components/Sidebar";
import {Doctors} from '../Components/ViewDoctorList';


export default function DoctorsListPage() {
  return (
    <>
      <div className="flex">
        <Sidebar tab_index={2} /> 
        <section className="ml-12 mr-8 container mx-auto my-8">
          <div className="mb-8">
         
          </div>
          <div>
            <Doctors />
          </div>
        </section>
      </div>
    </>
  );
}
