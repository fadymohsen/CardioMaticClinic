import { useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Tooltip,
  CardFooter,
  IconButton,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  "Date",
  "Reason",
  "Diagnosis",
  "Treatment",
  "Allergies",
  "Smoking Status",
  "Alcohol Intake",
  "",
];

const TABLE_ROWS = [
  {
    date: "2024-05-01",
    reason: "Check-up",
    diagnosis: "Healthy",
    treatment: "None",
    allergies: "None",
    smoking: "No",
    alcohol: "Moderate",
  },
  {
    date: "2024-04-15",
    reason: "Headache",
    diagnosis: "Migraine",
    treatment: "Medication",
    allergies: "Peanuts",
    smoking: "No",
    alcohol: "Low",
  },
  {
    date: "2024-03-20",
    reason: "Fever",
    diagnosis: "Flu",
    treatment: "Rest and fluids",
    allergies: "None",
    smoking: "Yes",
    alcohol: "High",
  },
  {
    date: "2024-02-28",
    reason: "Back pain",
    diagnosis: "Herniated disc",
    treatment: "Physical therapy",
    allergies: "None",
    smoking: "No",
    alcohol: "Low",
  },
  {
    date: "2024-01-10",
    reason: "Diabetes check",
    diagnosis: "Type 2 Diabetes",
    treatment: "Insulin",
    allergies: "None",
    smoking: "No",
    alcohol: "None",
  },
  {
    date: "2024-02-28",
    reason: "Back pain",
    diagnosis: "Herniated disc",
    treatment: "Physical therapy",
    allergies: "None",
    smoking: "No",
    alcohol: "Low",
  },
  {
    date: "2024-01-10",
    reason: "Diabetes check",
    diagnosis: "Type 2 Diabetes",
    treatment: "Insulin",
    allergies: "None",
    smoking: "No",
    alcohol: "None",
  },  {
    date: "2024-02-28",
    reason: "Back pain",
    diagnosis: "Herniated disc",
    treatment: "Physical therapy",
    allergies: "None",
    smoking: "No",
    alcohol: "Low",
  },
  {
    date: "2024-01-10",
    reason: "Diabetes check",
    diagnosis: "Type 2 Diabetes",
    treatment: "Insulin",
    allergies: "None",
    smoking: "No",
    alcohol: "None",
  },  {
    date: "2024-02-28",
    reason: "Back pain",
    diagnosis: "Herniated disc",
    treatment: "Physical therapy",
    allergies: "None",
    smoking: "No",
    alcohol: "Low",
  },
  {
    date: "2024-01-10",
    reason: "Diabetes check",
    diagnosis: "Type 2 Diabetes",
    treatment: "Insulin",
    allergies: "None",
    smoking: "No",
    alcohol: "None",
  },  {
    date: "2024-02-28",
    reason: "Back pain",
    diagnosis: "Herniated disc",
    treatment: "Physical therapy",
    allergies: "None",
    smoking: "No",
    alcohol: "Low",
  },
  {
    date: "2024-01-10",
    reason: "Diabetes check",
    diagnosis: "Type 2 Diabetes",
    treatment: "Insulin",
    allergies: "None",
    smoking: "No",
    alcohol: "None",
  },  {
    date: "2024-02-28",
    reason: "Back pain",
    diagnosis: "Herniated disc",
    treatment: "Physical therapy",
    allergies: "None",
    smoking: "No",
    alcohol: "Low",
  },
  {
    date: "2024-01-10",
    reason: "Diabetes check",
    diagnosis: "Type 2 Diabetes",
    treatment: "Insulin",
    allergies: "None",
    smoking: "No",
    alcohol: "None",
  },  {
    date: "2024-02-28",
    reason: "Back pain",
    diagnosis: "Herniated disc",
    treatment: "Physical therapy",
    allergies: "None",
    smoking: "No",
    alcohol: "Low",
  },
  {
    date: "2024-01-10",
    reason: "Diabetes check",
    diagnosis: "Type 2 Diabetes",
    treatment: "Insulin",
    allergies: "None",
    smoking: "No",
    alcohol: "None",
  },  {
    date: "2024-02-28",
    reason: "Back pain",
    diagnosis: "Herniated disc",
    treatment: "Physical therapy",
    allergies: "None",
    smoking: "No",
    alcohol: "Low",
  },
  {
    date: "2024-01-10",
    reason: "Diabetes check",
    diagnosis: "Type 2 Diabetes",
    treatment: "Insulin",
    allergies: "None",
    smoking: "No",
    alcohol: "None",
  },  {
    date: "2024-02-28",
    reason: "Back pain",
    diagnosis: "Herniated disc",
    treatment: "Physical therapy",
    allergies: "None",
    smoking: "No",
    alcohol: "Low",
  },
  {
    date: "2024-01-10",
    reason: "Diabetes check",
    diagnosis: "Type 2 Diabetes",
    treatment: "Insulin",
    allergies: "None",
    smoking: "No",
    alcohol: "None",
  },  {
    date: "2024-02-28",
    reason: "Back pain",
    diagnosis: "Herniated disc",
    treatment: "Physical therapy",
    allergies: "None",
    smoking: "No",
    alcohol: "Low",
  },
  {
    date: "2024-01-10",
    reason: "Diabetes check",
    diagnosis: "Type 2 Diabetes",
    treatment: "Insulin",
    allergies: "None",
    smoking: "No",
    alcohol: "None",
  },  {
    date: "2024-02-28",
    reason: "Back pain",
    diagnosis: "Herniated disc",
    treatment: "Physical therapy",
    allergies: "None",
    smoking: "No",
    alcohol: "Low",
  },
  {
    date: "2024-01-10",
    reason: "Diabetes check",
    diagnosis: "Type 2 Diabetes",
    treatment: "Insulin",
    allergies: "None",
    smoking: "No",
    alcohol: "None",
  },  {
    date: "2024-02-28",
    reason: "Back pain",
    diagnosis: "Herniated disc",
    treatment: "Physical therapy",
    allergies: "None",
    smoking: "No",
    alcohol: "Low",
  },
  {
    date: "2024-01-10",
    reason: "Diabetes check",
    diagnosis: "Type 2 Diabetes",
    treatment: "Insulin",
    allergies: "None",
    smoking: "No",
    alcohol: "None",
  },  {
    date: "2024-02-28",
    reason: "Back pain",
    diagnosis: "Herniated disc",
    treatment: "Physical therapy",
    allergies: "None",
    smoking: "No",
    alcohol: "Low",
  },
  {
    date: "2024-01-10",
    reason: "Diabetes check",
    diagnosis: "Type 2 Diabetes",
    treatment: "Insulin",
    allergies: "None",
    smoking: "No",
    alcohol: "None",
  },
];

export function MedicalRecord() {
  const role = localStorage.getItem("role");

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(6); // Change this value to adjust the number of rows per page

  const filteredRows = TABLE_ROWS.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Calculate the indexes of the first and last row on the current page
  let indexOfLastRow = currentPage * rowsPerPage;
  let indexOfFirstRow = indexOfLastRow - rowsPerPage;
  let currentRows = filteredRows.slice(indexOfFirstRow, indexOfLastRow);

  // Handle changing the page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    indexOfLastRow = currentPage * rowsPerPage;
    indexOfFirstRow = indexOfLastRow - rowsPerPage;
    currentRows = filteredRows.slice(indexOfFirstRow, indexOfLastRow);
    // Select the tbody element
    const tbody = document.querySelector(".tbody");

    // Remove all child elements if tbody exists
    if (tbody) {
      // Set the innerHTML of tbody to an empty string to remove all child nodes
      tbody.innerHTML = "";
    }
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              MedicalRecord
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all MedicalRecords
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map(
              (
                {
                  date,
                  reason,
                  diagnosis,
                  treatment,
                  allergies,
                  smoking,
                  alcohol,
                },
                index
              ) => {
                const isLast = index === currentRows.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                // Generate a unique key based on the index
                const key = `${date}_${index}`;

                return (
                  <tr key={key}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {reason}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {diagnosis}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {treatment}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {allergies}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {smoking}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {alcohol}
                      </Typography>
                    </td>
                   { role === "doctor" && <td className={classes}>
                      <Link to={"/EditMedicalRecord"}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </Link>
                    </td>}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {currentPage} of {Math.ceil(filteredRows.length / rowsPerPage)}
        </Typography>
        <div className="flex gap-2">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            variant="outlined"
            size="sm"
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            variant="outlined"
            size="sm"
            disabled={indexOfLastRow >= filteredRows.length}
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
