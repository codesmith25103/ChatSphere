import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>
        {/* <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/chat" element={<Chat></Chat>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}
