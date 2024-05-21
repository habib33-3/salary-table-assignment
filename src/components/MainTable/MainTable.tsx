import useJob from "@/hook/useJob";
import { DataTable } from "./DataTable";
import { columns } from "./Column";
import { formatCurrency } from "@/lib/utils";
import { useMemo } from "react";

const MainTable = () => {
  const jobs = useJob();

  const data = useMemo(() => {
    // Get all unique years from the dataset
    const uniqueYears = Array.from(new Set(jobs.map((obj) => obj.work_year)));

    // Filter the jobs for a certain year
    const jobsInYear = (year: number) =>
      jobs.filter((job) => job.work_year === year);

    // Calculate the average salary for a certain year
    const averageSalary = (year: number) => {
      const jobsForYear = jobsInYear(year);
      const totalSalary = jobsForYear.reduce(
        (acc, curr) => acc + curr.salary_in_usd,
        0
      );
      const average = totalSalary / jobsForYear.length;
      return formatCurrency(average);
    };

    // Map an array with objects containing year, total job count, and average salary
    return uniqueYears.map((year) => {
      const jobsForYear = jobsInYear(year);
      const jobNumber = jobsForYear.length;
      const avgSalary = averageSalary(year);
      return {
        year: year,
        totalJob: jobNumber,
        averageSalary: avgSalary,
      };
    });
  }, [jobs]);

  return (
    <div>
      <div className="container mx-auto py-10">
        <DataTable
          columns={columns}
          data={data}
        />
      </div>
    </div>
  );
};

export default MainTable;
