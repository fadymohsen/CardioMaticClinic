import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/24/outline";
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

const TABLE_HEAD = ["Name", "Age", "Gender", "Email", "", "Actions"];

export function PatientList() {
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(6);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/users/patients")
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the patients!", error);
      });
  }, []);

  const filteredRows = patients.filter((row) =>
    Object.values(row).some((value) =>
      value
        ? value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        : false
    )
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredRows.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = (index) => {
    const updatedPatients = patients.filter((_, i) => i !== index);
    setPatients(updatedPatients);
    setCurrentPage(1); // Reset to the first page if rows are deleted
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Patients list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all Patients
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Link to="/AddPatient">
              <Button className="flex items-center gap-3 " size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add patient
              </Button>
            </Link>
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
            {currentRows.map(({ name, age, gender, email }, index) => {
              const isLast = index === currentRows.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              const key = `${name}_${index}`;

              return (
                <tr key={key}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name || "N/A"}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {age || "N/A"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {gender}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Link to={"/EditPatient"}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </Link>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Delete User">
                      <IconButton
                        variant="text"
                        onClick={() => handleDelete(index)}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
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
