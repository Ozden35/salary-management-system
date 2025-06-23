import { useEffect, useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  const [workers, setWorkers]= useState(localStorage.getItem("workers") ? JSON.parse(localStorage.getItem("workers")) : []);

  localStorage.getItem("workers")

useEffect(() => {
  localStorage.setItem("workers", JSON.stringify(workers))

},[workers]);

  return (
    <div className="App">
      <h1 className="text-white text-center mt-6 text-3xl">Maaş Otomasyonu</h1>
      <AddWorker setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </div>
  );
}

export default App;
