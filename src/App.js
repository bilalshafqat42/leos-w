import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Project from "./pages/projects/Project";
import HadleyHeights from "./pages/project/hadleyHeights/HadleyHeights";
import Exterior1 from "./pages/project/hadleyHeights/Exterior1";
import Exterior2 from "./pages/project/hadleyHeights/Exterior2";
import Dusk from "./pages/project/hadleyHeights/Dusk";
import Entrance from "./pages/project/hadleyHeights/Entrance";
import Facade from "./pages/project/hadleyHeights/Facade";
import Location from "./pages/project/hadleyHeights/Location";
import WeybridgeGardens from "./pages/project/weybridgeGardens/WeybridgeGardens";
import HadleyHeights2 from "./pages/project/hadleyHeights2/HadleyHeights2";
import Balcony from "./pages/project/hadleyHeights/Balcony";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/projects/hadley-heights" element={<HadleyHeights />} />
      <Route
        path="/projects/hadley-heights/exterior1"
        element={<Exterior1 />}
      />
      <Route
        path="/projects/hadley-heights/exterior2"
        element={<Exterior2 />}
      />
      <Route path="/projects/hadley-heights/dusk" element={<Dusk />} />
      <Route path="/projects/hadley-heights/entrance" element={<Entrance />} />
      <Route path="/projects/hadley-heights/facade" element={<Facade />} />
      <Route path="/projects/hadley-heights/balcony" element={<Balcony />} />
      <Route path="/projects/hadley-heights/location" element={<Location />} />
      <Route
        path="/projects/weybridge-gardens"
        element={<WeybridgeGardens />}
      />
      <Route path="/projects/hadley-heights-2" element={<HadleyHeights2 />} />
    </Routes>
  );
}

export default App;
