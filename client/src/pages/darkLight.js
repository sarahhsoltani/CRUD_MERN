import React, { useState } from "react";
import Form from "./form";
import "../App.css";
import ReactSwitch from "react-switch"
import { createContext } from "react";
export const ThemeContext = createContext(null);
function DarkLight() {
  const [theme, setTheme] = useState("light");
  const toggleThem = () => {
    setTheme((curr)=>(curr==="light"?"dark":"light"))
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div  id={theme}>
        <Form />
        <div className="switch">
            <label className="text-red">{theme==="light"?"Light Mode" :"Dark Mode"}</label>
        <ReactSwitch onChange={toggleThem} checked={theme==="dark"}/>
        </div>
        
      </div>
    </ThemeContext.Provider>
  );
}

export default  DarkLight;
