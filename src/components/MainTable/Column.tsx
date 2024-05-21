import {  ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { LuArrowUpDown } from "react-icons/lu";

export type MainTableType = {
  year: number;
  totalJob: number;
  averageSalary: string;
};

export const columns: ColumnDef<MainTableType>[] = [
  {
    accessorKey: "year",
    header: ({ column }) => {
      return (
        <Button
          variant="secondary"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Year
          <LuArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "averageSalary",
    header: ({ column }) => {
      return (
        <Button
          variant="secondary"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Average Salary
          <LuArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "totalJob",
    header: ({ column }) => {
      return (
        <Button
          variant="secondary"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total Job
          <LuArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
