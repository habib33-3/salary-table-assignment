import { formatCurrency } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

const useJob = () => {
  const [jobs, setJobs] = useState<JobType[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("./data.json");
      const data = await response.json();
      setJobs(data);
    };

    fetchJobs();
  }, []);

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
      return average;
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
        formattedAverage: formatCurrency(avgSalary),
        jobsForYear,
      };
    });
  }, [jobs]);

  return data;
};

export default useJob;
