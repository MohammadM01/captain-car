import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Chatbot from "./Components/Chatbot";

const Home = lazy(() => import("./Pages/Home"));
const Services = lazy(() => import("./Pages/Services"));
const Products = lazy(() => import("./Pages/Products"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const WhyUs = lazy(() => import("./Pages/WhyUs"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-black">
          <Navbar />
          <Chatbot />
          <Suspense
            fallback={
              <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-[#E31E24] border-t-transparent rounded-full animate-spin"></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
