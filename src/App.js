import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
