import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Users from "./pages/Users";
import { QueryClient, QueryClientProvider } from "react-query";
import BookApp from './pages/BookApp';
import Contact from './pages/Contact';
import ServiceDetails from "./pages/ServiceDetails";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/our-team" element={<Users />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/bookapp" element={<BookApp />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <Footer />
    </>
  );
}

export default App;
