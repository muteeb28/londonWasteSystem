import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import SofaChairRemoval from './pages/SofaChairRemoval/SofaChairRemoval';
import FridgeRemoval from './pages/FridgeRemoval/FridgeRemoval';
import GardenWasteRemoval from './pages/GardenWasteRemoval/GardenWasteRemoval';
import MattressBedRemoval from './pages/MattressBedRemoval/MattressBedRemoval';
import TableRemoval from './pages/TableRemoval/TableRemoval';
import OldBatteriesDisposal from './pages/OldBatteriesDisposal/OldBatteriesDisposal';
import ApplianceRemoval from './pages/ApplianceRemoval/ApplianceRemoval';
import ElectronicRemoval from './pages/ElectronicRemoval/ElectronicRemoval';
import FurnitureRemoval from './pages/FurnitureRemoval/FurnitureRemoval';
import HazardousWasteRemoval from './pages/HazardousWasteRemoval/HazardousWasteRemoval';
import GeneralWasteLoadSizes from './pages/GeneralWasteLoadSizes/GeneralWasteLoadSizes';
import BuildersConstructionWasteRemoval from './pages/BuildersConstructionWasteRemoval/BuildersConstructionWasteRemoval';
import QuoteForm from './pages/QuoteForm/QuoteForm';
import BlogList from './pages/Blog/BlogList/BlogList';
import BlogPost from './pages/Blog/BlogPost/BlogPost';
import ContactUs from './pages/ContactUs/ContactUs';
import MovingServices from './pages/MovingServices/MovingServices';
import Chatbot from './components/Chatbot/Chatbot';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/sofa-chair-removal" element={<SofaChairRemoval />} />
          <Route path="/fridge-removal" element={<FridgeRemoval />} />
          <Route path="/garden-waste-removal" element={<GardenWasteRemoval />} />
          <Route path="/mattress-bed-removal" element={<MattressBedRemoval />} />
          <Route path="/table-removal" element={<TableRemoval />} />
          <Route path="/old-batteries-disposal" element={<OldBatteriesDisposal />} />
          <Route path="/appliance-removal" element={<ApplianceRemoval />} />
          <Route path="/electronic-removal" element={<ElectronicRemoval />} />
          <Route path="/furniture-removal" element={<FurnitureRemoval />} />
          <Route path="/hazardous-waste-removal" element={<HazardousWasteRemoval />} />
          <Route path="/general-waste-load-sizes" element={<GeneralWasteLoadSizes />} />
          <Route path="/builders-construction-waste-removal" element={<BuildersConstructionWasteRemoval />} />
          <Route path="/quote" element={<QuoteForm />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/moving-services" element={<MovingServices />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App
