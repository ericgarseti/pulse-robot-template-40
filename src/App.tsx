import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OnGoingRnD from "./pages/OnGoingRnD";
import AeroVayu from "./pages/AeroVayu";
import AeroStern from "./pages/AeroStern";
import Applications from "./pages/Applications";
import ThreeDModeling from "./pages/applications/3DModeling";
import GeospatialInspection from "./pages/applications/GeospatialInspection";
import InfrastructureInspection from "./pages/applications/InfrastructureInspection";
import UtilityInspection from "./pages/applications/UtilityInspection";
import SearchRescue from "./pages/applications/SearchRescue";
import EcologicalInspection from "./pages/applications/EcologicalInspection";
import PrecisionAgriculture from "./pages/applications/PrecisionAgriculture";
import Surveillance from "./pages/applications/Surveillance";
import Industries from "./pages/Industries";
import MilitaryDefence from "./pages/industries/MilitaryDefence";
import Agriculture from "./pages/industries/Agriculture";
import Construction from "./pages/industries/Construction";
import MiningQuarrying from "./pages/industries/MiningQuarrying";
import ForestConservation from "./pages/industries/ForestConservation";
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ongoing-rnd" element={<OnGoingRnD />} />
          <Route path="/aero-vayu" element={<AeroVayu />} />
          <Route path="/aero-stern" element={<AeroStern />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/applications/3d-modeling" element={<ThreeDModeling />} />
          <Route path="/applications/geospatial-inspection" element={<GeospatialInspection />} />
          <Route path="/applications/infrastructure-inspection" element={<InfrastructureInspection />} />
          <Route path="/applications/utility-inspection" element={<UtilityInspection />} />
          <Route path="/applications/search-rescue" element={<SearchRescue />} />
          <Route path="/applications/ecological-inspection" element={<EcologicalInspection />} />
          <Route path="/applications/precision-agriculture" element={<PrecisionAgriculture />} />
          <Route path="/applications/surveillance" element={<Surveillance />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/military-defence" element={<MilitaryDefence />} />
          <Route path="/industries/agriculture" element={<Agriculture />} />
          <Route path="/industries/construction" element={<Construction />} />
          <Route path="/industries/mining-quarrying" element={<MiningQuarrying />} />
          <Route path="/industries/forest-conservation" element={<ForestConservation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
