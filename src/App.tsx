
import TaskItems from "./components/TaskItems";
import TopForm from "./components/TopForm";


const App = () => {

  return (
    <div className="bg-BACKGROUND min-h-screen text-FOREGROUND flex justify-center items-center">
      <div className="w-fit h-fit p-8 flex flex-col gap-4 bg-CURRENT_LINE rounded-lg">
        <TopForm />
        <TaskItems />
      </div>
    </div>
  );
};

export default App;
