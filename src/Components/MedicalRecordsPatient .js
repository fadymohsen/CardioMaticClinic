import { useState } from "react";
import { Card, CardHeader, Input, Typography } from "@material-tailwind/react";

export function MedicalRecord() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([
    {
      date: "23/04/18",
      reason: "Headache",
      diagnosis: "Migraine",
      treatment: "Ibuprofen",
      allergies: "None",
      smokingStatus: "Non-smoker",
      alcoholIntake: "Occasional",
    },
    {
      date: "23/04/18",
      reason: "Headache",
      diagnosis: "Migraine",
      treatment: "Ibuprofen",
      allergies: "None",
      smokingStatus: "Non-smoker",
      alcoholIntake: "Occasional",
    },
    {
      date: "23/04/18",
      reason: "Headache",
      diagnosis: "Migraine",
      treatment: "Ibuprofen",
      allergies: "None",
      smokingStatus: "Non-smoker",
      alcoholIntake: "Occasional",
    },
    {
      date: "23/04/18",
      reason: "Headache",
      diagnosis: "Migraine",
      treatment: "Ibuprofen",
      allergies: "None",
      smokingStatus: "Non-smoker",
      alcoholIntake: "Occasional",
    },
    {
      date: "23/04/18",
      reason: "Headache",
      diagnosis: "Migraine",
      treatment: "Ibuprofen",
      allergies: "None",
      smokingStatus: "Non-smoker",
      alcoholIntake: "Occasional",
    },
    {
      date: "4/04/18",
      reason: "Headache",
      diagnosis: "Migraine",
      treatment: "Ibuprofen",
      allergies: "None",
      smokingStatus: "Non-smoker",
      alcoholIntake: "Occasional",
    },
    {
      date: "02/04/18",
      reason: "Headache",
      diagnosis: "Migraine",
      treatment: "Ibuprofen",
      allergies: "None",
      smokingStatus: "Non-smoker",
      alcoholIntake: "Occasional",
    },{
      date: "03/04/18",
      reason: "Headache",
      diagnosis: "Migraine",
      treatment: "Ibuprofen",
      allergies: "None",
      smokingStatus: "Non-smoker",
      alcoholIntake: "Occasional",
    },
    // Add more data objects as needed
  ]);

  const filteredData = data.filter(item =>
    item.date.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // If search input is empty, clear the filter
    if (inputValue === "") {
      setSearchInput("");
    }
  };

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
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-72">
            <Input 
              placeholder="Search with date" 
              value={searchInput}
              onChange={handleSearchChange} // Update to use the custom handler
            />
          </div>
        </div>
      </CardHeader>
      <div className="mt-4">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="p-4">Date</th>
              <th className="p-4">Reason</th>
              <th className="p-4">Diagnosis</th>
              <th className="p-4">Treatment</th>
              <th className="p-4">Allergies</th>
              <th className="p-4">Smoking Status</th>
              <th className="p-4">Alcohol Intake</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(({ date, reason, diagnosis, treatment, allergies, smokingStatus, alcoholIntake }) => (
              <tr key={date} className="p-4 border-b border-blue-gray-50">
                <td className="p-4">{date}</td>
                <td className="p-4">{reason}</td>
                <td className="p-4">{diagnosis}</td>
                <td className="p-4">{treatment}</td>
                <td className="p-4">{allergies}</td>
                <td className="p-4">{smokingStatus}</td>
                <td className="p-4">{alcoholIntake}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
