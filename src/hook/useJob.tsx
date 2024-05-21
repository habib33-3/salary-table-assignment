import { useEffect, useState } from "react";

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

  return jobs;
};

export default useJob;
