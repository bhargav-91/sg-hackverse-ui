import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PersistentDrawerLeft from "./PersistentDrawerLeft";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PersistentDrawerLeft />
      </BrowserRouter>
    </div>
  );
}

export default App;
