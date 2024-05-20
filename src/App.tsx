import useJob from "./hook/useJob";

const App = () => {
  const job = useJob();

  return (
    <div className="min-h-screen w-full bg-[#111] text-[#f1f]">
      {job.length}
    </div>
  );
};

export default App;
