import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Project from "./pages/projects/Project";
import HadleyHeights from "./pages/project/hadleyHeights/HadleyHeights";
import Exterior from "./pages/project/hadleyHeights/Exterior";
import Interior from "./pages/project/hadleyHeights/Interior";
import Dusk from "./pages/project/hadleyHeights/Dusk";
import Entrance from "./pages/project/hadleyHeights/Entrance";
import Facade from "./pages/project/hadleyHeights/Facade";
import Location from "./pages/project/hadleyHeights/Location";
import Amenities from "./pages/project/hadleyHeights/Amenities";
import Units from "./pages/project/hadleyHeights/units/Units";

import Floors from "./pages/project/hadleyHeights/floors/Floors";
import Floor1 from "./pages/project/hadleyHeights/floors/Floor1";
import Floor2 from "./pages/project/hadleyHeights/floors/Floor2";
import Floor3 from "./pages/project/hadleyHeights/floors/Floor3";
import Floor4 from "./pages/project/hadleyHeights/floors/Floor4";
import Floor5 from "./pages/project/hadleyHeights/floors/Floor5";
import Floor6 from "./pages/project/hadleyHeights/floors/Floor6";
import Floor7 from "./pages/project/hadleyHeights/floors/Floor7";
import Floor8 from "./pages/project/hadleyHeights/floors/Floor8";
import Floor9 from "./pages/project/hadleyHeights/floors/Floor9";
import Floor10 from "./pages/project/hadleyHeights/floors/Floor10";
import Floor11 from "./pages/project/hadleyHeights/floors/Floor11";
import Floor12 from "./pages/project/hadleyHeights/floors/Floor12";
import Floor13 from "./pages/project/hadleyHeights/floors/Floor13";
import Floor14 from "./pages/project/hadleyHeights/floors/Floor14";
import Floor15 from "./pages/project/hadleyHeights/floors/Floor15";
import Floor16 from "./pages/project/hadleyHeights/floors/Floor16";
import Floor17 from "./pages/project/hadleyHeights/floors/Floor17";
import Floor18 from "./pages/project/hadleyHeights/floors/Floor18";
import Floor19 from "./pages/project/hadleyHeights/floors/Floor19";
import Floor20 from "./pages/project/hadleyHeights/floors/Floor20";
import Floor21 from "./pages/project/hadleyHeights/floors/Floor21";
import Floor22 from "./pages/project/hadleyHeights/floors/Floor22";
import Floor23 from "./pages/project/hadleyHeights/floors/Floor23";

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
import VirtualTour from "./pages/project/hadleyHeights/VirtualTour";

import Apitest from "./Apitest";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/projects/hadley-heights" element={<HadleyHeights />} />
      <Route path="/test" element={<Apitest />} />

      <Route path="/projects/hadley-heights/exterior" element={<Exterior />} />
      <Route path="/projects/hadley-heights/interior" element={<Interior />} />
      <Route path="/projects/hadley-heights/dusk" element={<Dusk />} />
      <Route path="/projects/hadley-heights/entrance" element={<Entrance />} />
      <Route path="/projects/hadley-heights/facade" element={<Facade />} />
      <Route
        path="/projects/hadley-heights/virtual-tour"
        element={<VirtualTour />}
      />
      <Route path="/projects/hadley-heights/location" element={<Location />} />
      <Route path="/projects/hadley-heights/units" element={<Units />} />

      <Route path="/projects/hadley-heights/floors" element={<Floors />} />
      <Route path="/projects/hadley-heights/floors-1" element={<Floor1 />} />
      <Route path="/projects/hadley-heights/floors-2" element={<Floor2 />} />
      <Route path="/projects/hadley-heights/floors-3" element={<Floor3 />} />
      <Route path="/projects/hadley-heights/floors-4" element={<Floor4 />} />
      <Route path="/projects/hadley-heights/floors-5" element={<Floor5 />} />
      <Route path="/projects/hadley-heights/floors-6" element={<Floor6 />} />
      <Route path="/projects/hadley-heights/floors-7" element={<Floor7 />} />
      <Route path="/projects/hadley-heights/floors-8" element={<Floor8 />} />
      <Route path="/projects/hadley-heights/floors-9" element={<Floor9 />} />
      <Route path="/projects/hadley-heights/floors-10" element={<Floor10 />} />
      <Route path="/projects/hadley-heights/floors-11" element={<Floor11 />} />
      <Route path="/projects/hadley-heights/floors-12" element={<Floor12 />} />
      <Route path="/projects/hadley-heights/floors-13" element={<Floor13 />} />
      <Route path="/projects/hadley-heights/floors-14" element={<Floor14 />} />
      <Route path="/projects/hadley-heights/floors-15" element={<Floor15 />} />
      <Route path="/projects/hadley-heights/floors-16" element={<Floor16 />} />
      <Route path="/projects/hadley-heights/floors-17" element={<Floor17 />} />
      <Route path="/projects/hadley-heights/floors-18" element={<Floor18 />} />
      <Route path="/projects/hadley-heights/floors-19" element={<Floor19 />} />
      <Route path="/projects/hadley-heights/floors-20" element={<Floor20 />} />
      <Route path="/projects/hadley-heights/floors-21" element={<Floor21 />} />
      <Route path="/projects/hadley-heights/floors-22" element={<Floor22 />} />
      <Route path="/projects/hadley-heights/floors-23" element={<Floor23 />} />

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
