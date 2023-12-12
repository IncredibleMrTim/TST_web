import { Header } from "@/components/header/header";
import { Root } from "./pages/root/root";

function App() {
  return (
    <div>
      <div className="header-container">
        <Header />
      </div>
      <div>
        <Root />
      </div>
    </div>
  );
}

export default App;
