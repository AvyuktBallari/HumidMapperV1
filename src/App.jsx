import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Maps from './Maps';
import ContactSection from './components/Contact';
import Map from './Map';


const App = () => {

  return (
      <div>
            <BrowserRouter>

              <Routes>
                <Route index element={<Home />} />
                <Route path="/map" element={<Maps />} />
                <Route path="/map/:farm" element={<Map />} />
                <Route path="/contact" element={<ContactSection />} />
              </Routes>
            </BrowserRouter>
      </div>
  );
};

export default App;