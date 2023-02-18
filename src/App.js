import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import initData from "./utils/initData";

export const dataContext = createContext();

function App() {
  useEffect(() => {
    setData(initData);
  }, []);

  const [data, setData] = useState([]);
  return (
    <BrowserRouter>
      <dataContext.Provider value={data}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </dataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
