import { Header } from "@/components/header/header";
import { Outlet } from "react-router-dom";
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize("YOUR_MEASUREMENT_ID");

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
