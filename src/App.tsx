import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Index from "./pages/Index";
import MusicVideo1 from "./pages/MusicVideo1";
import MusicVideo2 from "./pages/MusicVideo2";
import CgiVfx from "./pages/CgiVfx";
import Artwork3D from "./pages/Artwork3D";
import MotionDesign from "./pages/MotionDesign";
import Commercials from "./pages/Commercials";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work/music-video-1" element={<MusicVideo1 />} />
          <Route path="/work/music-video-2" element={<MusicVideo2 />} />
          <Route path="/work/cgi-vfx" element={<CgiVfx />} />
          <Route path="/work/3d-artwork" element={<Artwork3D />} />
          <Route path="/work/motion-design" element={<MotionDesign />} />
          <Route path="/work/commercials" element={<Commercials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
