import { useEffect, useState } from "react";

const useJob = () => {
  const [job, setJob] = useState<JobType[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("./data.json");
      const data = await response.json();
      setJob(data);
    };

    fetchJobs();
  }, []);

  return job;
};

export default useJob;
