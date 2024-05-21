import useJob from "@/hook/useJob";
import { DataTable } from "./DataTable";
import { columns } from "./Column";

const MainTable = () => {
  const jobs = useJob();

  const uniqueYears = Array.from(new Set(jobs.map((obj) => obj.work_year)));

  const jobsInYear = (year: number) =>
    jobs.filter((job) => job.work_year === year);

  const averageSalary = (year: number) => {
    const jobsForYear = jobsInYear(year);
    const totalSalary = jobsForYear.reduce(
      (acc, curr) => acc + curr.salary_in_usd,
      0
    );
    const average = totalSalary / jobsForYear.length;
    return average.toFixed(2);
  };

  const data = uniqueYears.map((year) => {
    const jobsForYear = jobsInYear(year);
    const jobNumber = jobsForYear.length;
    const avgSalary = averageSalary(year);
    return {
      year: year,
      totalJob: jobNumber,
      averageSalary: avgSalary,
    };
  });

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
