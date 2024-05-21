import LineChart from "./components/LineChart/LineChart";
import MainTable from "./components/MainTable/MainTable";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#111] text-[#f1f]">
      <MainTable />
      <LineChart/>
    </div>
  );
};

export default App;
