import LineChart from "./components/LineChart/LineChart";
import MainTable from "./components/MainTable/MainTable";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-300">
      <MainTable />
      <LineChart/>
    </div>
  );
};

export default App;
