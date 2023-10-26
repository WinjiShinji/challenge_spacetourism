import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import { SiteProvider } from "./context/siteContext";
import Technology from "./pages/Technology";

function App() {
  return (
    <div className="app">
      <SiteProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </SiteProvider>
    </div>
  );
}

export default App;
