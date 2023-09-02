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
import Amenities from "./pages/project/hadleyHeights/Amenities";
import Units from "./pages/project/hadleyHeights/units/Units";
import Floors from "./pages/project/hadleyHeights/floors/Floors";
import FloorPlans from "./pages/project/hadleyHeights/floorPlans/FloorPlans";
import FloorPlan2 from "./pages/project/hadleyHeights/floorPlans/FloorPlan2";
import FloorPlan3 from "./pages/project/hadleyHeights/floorPlans/FloorPlan3";
import FloorPlan4 from "./pages/project/hadleyHeights/floorPlans/FloorPlan4";
import FloorPlan5 from "./pages/project/hadleyHeights/floorPlans/FloorPlan5";
import FloorPlan6 from "./pages/project/hadleyHeights/floorPlans/FloorPlan6";
import FloorPlan7 from "./pages/project/hadleyHeights/floorPlans/FloorPlan7";
import FloorPlan8 from "./pages/project/hadleyHeights/floorPlans/FloorPlan8";
import FloorPlan9 from "./pages/project/hadleyHeights/floorPlans/FloorPlan9";
import FloorPlan10 from "./pages/project/hadleyHeights/floorPlans/FloorPlan10";
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
      <Route path="/projects/hadley-heights/units" element={<Units />} />
      <Route path="/projects/hadley-heights/floors" element={<Floors />} />

      <Route
        path="/projects/hadley-heights/floorplans"
        element={<FloorPlans />}
      />
      <Route
        path="/projects/hadley-heights/floorplan-2"
        element={<FloorPlan2 />}
      />
      <Route
        path="/projects/hadley-heights/floorplan-3"
        element={<FloorPlan3 />}
      />
      <Route
        path="/projects/hadley-heights/floorplan-4"
        element={<FloorPlan4 />}
      />
      <Route
        path="/projects/hadley-heights/floorplan-5"
        element={<FloorPlan5 />}
      />
      <Route
        path="/projects/hadley-heights/floorplan-6"
        element={<FloorPlan6 />}
      />
      <Route
        path="/projects/hadley-heights/floorplan-7"
        element={<FloorPlan7 />}
      />
      <Route
        path="/projects/hadley-heights/floorplan-8"
        element={<FloorPlan8 />}
      />
      <Route
        path="/projects/hadley-heights/floorplan-9"
        element={<FloorPlan9 />}
      />
      <Route
        path="/projects/hadley-heights/floorplan-10"
        element={<FloorPlan10 />}
      />

      <Route
        path="/projects/hadley-heights/amenities"
        element={<Amenities />}
      />
      <Route
        path="/projects/weybridge-gardens"
        element={<WeybridgeGardens />}
      />
      <Route path="/projects/hadley-heights-2" element={<HadleyHeights2 />} />
    </Routes>
  );
}

export default App;
