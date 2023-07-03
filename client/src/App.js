import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import DarkLight from "./pages/darkLight";
import CalendarMenu from "./pages/CalendarMenu";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/calendar" element={<CalendarMenu/>}/>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Details/>}/>
        <Route path="/DarkLight" element={<DarkLight/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
