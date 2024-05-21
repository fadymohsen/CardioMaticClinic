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
  "Patient",
  "Amount",
  "Payment Method",
  "Credit Number",
  "Status",
];

const TABLE_ROWS = [
  {
    patient: "John Michael",
    amount: "$100",
    paymentMethod: "Credit Card",
    creditNumber: "**** **** **** 1234",
    status: "Paid",
  },
  {
    patient: "Alexa Liras",
    amount: "$150",
    paymentMethod: "Cash",
    creditNumber: "-",
    status: "Unpaid",
  },
  {
    patient: "Laurent Perrier",
    amount: "$200",
    paymentMethod: "Bank Transfer",
    creditNumber: "-",
    status: "Paid",
  },
  // Add more rows as needed
];

export function InvoiceTable() {
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
              Invoice
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all Invoices
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Link to="/AddInvoice">
              <Button className="flex items-center gap-3 " size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Invoice
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
            {currentRows.map(
              (
                { patient, amount, paymentMethod, creditNumber, status },
                index
              ) => {
                const isLast = index === currentRows.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                // Generate a unique key based on the index
                const key = `${patient}_${index}`;

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
                            {patient}
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
                        {amount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {paymentMethod}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {creditNumber}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {status}
                      </Typography>
                    </td>
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
