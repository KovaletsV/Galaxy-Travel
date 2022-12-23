import Navbar from "./components/navbar/Navbar";
import Video from "./components/video/Video";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Home, Pricing, Training, Contact } from "./pages/index";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/training" element={<Training />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
