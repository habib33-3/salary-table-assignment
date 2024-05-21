import useJob from "@/hook/useJob";
import { DataTable } from "./DataTable";
import { columns } from "./Column";

const MainTable = () => {
  const data = useJob();

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
