import { useState } from "react";
import { Card, CardHeader, Typography } from "@material-tailwind/react";

export function Prescriptions() {
  const [data] = useState([
    {
      id: 1,
      title: "Prescription 1",
      date: "23/04/18",
      createdBy: "PCP",
      diseases: "Migraine",
      medications: "Ibuprofen",
    },
    {
      id: 2,
      title: "Prescription 2",
      date: "23/04/18",
      createdBy: "Specialist",
      diseases: "Headache",
      medications: "Paracetamol",
    },
    {
        id: 2,
        title: "Prescription 2",
        date: "23/04/18",
        createdBy: "Specialist",
        diseases: "Headache",
        medications: "Paracetamol",
      },
      {
        id: 2,
        title: "Prescription 2",
        date: "23/04/18",
        createdBy: "Specialist",
        diseases: "Headache",
        medications: "Paracetamol",
      },
      {
        id: 2,
        title: "Prescription 2",
        date: "23/04/18",
        createdBy: "Specialist",
        diseases: "Headache",
        medications: "Paracetamol",
      },
      {
        id: 2,
        title: "Prescription 2",
        date: "23/04/18",
        createdBy: "Specialist",
        diseases: "Headache",
        medications: "Paracetamol",
      },
      {
        id: 2,
        title: "Prescription 2",
        date: "23/04/18",
        createdBy: "Specialist",
        diseases: "Headache",
        medications: "Paracetamol",
      },
      {
        id: 2,
        title: "Prescription 2",
        date: "23/04/18",
        createdBy: "Specialist",
        diseases: "Headache",
        medications: "Paracetamol",
      },
      {
        id: 2,
        title: "Prescription 2",
        date: "23/04/18",
        createdBy: "Specialist",
        diseases: "Headache",
        medications: "Paracetamol",
      },
      {
        id: 2,
        title: "Prescription 2",
        date: "23/04/18",
        createdBy: "Specialist",
        diseases: "Headache",
        medications: "Paracetamol",
      },
      {
        id: 2,
        title: "Prescription 2",
        date: "23/04/18",
        createdBy: "Specialist",
        diseases: "Headache",
        medications: "Paracetamol",
      },
      {
        id: 2,
        title: "Prescription 2",
        date: "23/04/18",
        createdBy: "Specialist",
        diseases: "Headache",
        medications: "Paracetamol",
      },
          {
      id: 2,
      title: "Prescription 2",
      date: "23/04/18",
      createdBy: "Specialist",
      diseases: "Headache",
      medications: "Paracetamol",
    },
   
  ]);

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Patient Name
            </Typography>
          </div>
        </div>
      </CardHeader>
      <div className="mt-4">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Title</th>
              <th className="p-4">Date</th>
              <th className="p-4">Created by</th>
              <th className="p-4">Diseases</th>
              <th className="p-4">Medications</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, title, date, createdBy, diseases, medications }) => (
              <tr key={id} className="p-4 border-b border-blue-gray-50">
                <td className="p-4">{id}</td>
                <td className="p-4">{title}</td>
                <td className="p-4">{date}</td>
                <td className="p-4">{createdBy}</td>
                <td className="p-4">{diseases}</td>
                <td className="p-4">{medications}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
