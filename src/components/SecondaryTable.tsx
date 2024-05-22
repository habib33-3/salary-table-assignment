import { MainTableType } from "./MainTable/Column";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Cross2Icon } from "@radix-ui/react-icons";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SecondaryTableProps {
  isOpen: boolean;
  handleSheetClose: () => void;
  tableData: MainTableType | null;
}

const SecondaryTable = ({
  isOpen,
  handleSheetClose,
  tableData,
}: SecondaryTableProps) => {
  const jobTitles = new Set(
    tableData?.jobsForYear?.map((job) => job.job_title)
  );

  const jobTitleCount = (title: string) => {
    return tableData?.jobsForYear?.filter((job) => job.job_title === title)
      .length;
  };
  return (
    <Sheet open={isOpen}>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle className="text-center">
            Jobs in {tableData?.year}
          </SheetTitle>
        </SheetHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">JobTitle</TableHead>
              <TableHead>Job Title Count</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from(jobTitles).map((title) => (
              <TableRow key={title}>
                <TableCell className="font-medium">{title}</TableCell>
                <TableCell>{jobTitleCount(title)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <SheetClose
          onClick={handleSheetClose}
          className="fixed right-8 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
        >
          <Cross2Icon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default SecondaryTable;
