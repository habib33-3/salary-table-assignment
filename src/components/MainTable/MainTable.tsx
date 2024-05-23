import useJob from "@/hook/useJob";
import { DataTable } from "./DataTable";
import { columns } from "./Column";

const MainTable = () => {
  const data = useJob();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-xl font-bold text-stone-400 mb-4 text-center w-max mx-auto ">
        Job Trends in Year
      </h1>

      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
};

export default MainTable;
