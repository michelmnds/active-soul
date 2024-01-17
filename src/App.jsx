import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Header menu={menu} setMenu={setMenu} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
