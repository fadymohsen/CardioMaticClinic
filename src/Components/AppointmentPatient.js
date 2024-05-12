import React from "react";
import {
  Card,
  Typography,
  CardBody,
 
} from "@material-tailwind/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Chip } from "@material-tailwind/react";

const TABLE_HEAD = ["Date", "Time", "Doctor", "Status"];

const TABLE_ROWS = [
  {
    date: "2024-05-12",
    hour: "10",
    minute: "30",
    doctor: "Dr. Smith",
    status: "Previous",
  },
  {
    date: "2024-05-15",
    hour: "14",
    minute: "00",
    doctor: "Dr. Johnson",
    status: "Upcoming",
  },
  {
    date: "2024-05-12",
    hour: "10",
    minute: "30",
    doctor: "Dr. Smith",
    status: "Previous",
  },
  {
    date: "2024-05-15",
    hour: "14",
    minute: "00",
    doctor: "Dr. Johnson",
    status: "Upcoming",
  },
  {
    date: "2024-05-12",
    hour: "10",
    minute: "30",
    doctor: "Dr. Smith",
    status: "Previous",
  },
  {
    date: "2024-05-15",
    hour: "14",
    minute: "00",
    doctor: "Dr. Johnson",
    status: "Upcoming",
  },
  {
    date: "2024-05-12",
    hour: "10",
    minute: "30",
    doctor: "Dr. Smith",
    status: "Previous",
  },
  {
    date: "2024-05-15",
    hour: "14",
    minute: "00",
    doctor: "Dr. Johnson",
    status: "Upcoming",
  },
  {
    date: "2024-05-12",
    hour: "10",
    minute: "30",
    doctor: "Dr. Smith",
    status: "Previous",
  },
  {
    date: "2024-05-15",
    hour: "14",
    minute: "00",
    doctor: "Dr. Johnson",
    status: "Upcoming",
  },
];

export function Appointments() {
  return (
    <Card className="h-full w-full">
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ date, hour, minute, doctor, status }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={`${date}-${hour}-${minute}-${doctor}`}>
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
                      {hour}:{minute}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {doctor}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={status}
                        color={status === "Previous" ? "red" : "green"}
                      />
                    </div>
                  </td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
