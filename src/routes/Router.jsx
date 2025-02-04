import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogIn } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/*" element={<NotFound />} /> */}
        <Route path="/" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
