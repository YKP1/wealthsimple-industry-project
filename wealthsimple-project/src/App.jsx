import "./App.scss";
import {BrowserRouter, Routes, Route}from 'react-router-dom';
import Simulator from "./pages/Simulator/Simulator";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/simulator" element={<Simulator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;