import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import Contact from './pages/Contact';
// import Footer from './components/Footer'; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Aboutme" element={<Aboutme />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
