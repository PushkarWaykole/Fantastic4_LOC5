import React from "react";
import Register from "./Register";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import "react-toastify/dist/ReactToastify.css";
import CreateCoupons from "./pages/CreateCoupons";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        
        <Route exact path="/login" element={<Login />} />
        
        <Route exact path="/" element={<Home />}  />
        <Route exact path="/create" element={<CreateCoupons />} />
         

      </Routes>
    </BrowserRouter>
  );
}
