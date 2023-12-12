import { Header } from "@/components/header/header";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="header-container">
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
