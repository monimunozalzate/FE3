import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import MainLayout from "./Components/MainLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
