import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Detail from "./components/Detail";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />\
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
