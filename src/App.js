import "./App.css";
import { DataProvider } from "./Context/DataProvider";

import { RoutesPage } from "./Routes";

function App() {
  return (
    <DataProvider>
      <RoutesPage />
    </DataProvider>
  );
}

export default App;
