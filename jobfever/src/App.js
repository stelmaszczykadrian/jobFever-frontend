import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/WelcomePage";
import Login from "../src/pages/Login";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import JobsPage from "./pages/JobsPage";
import JobOfferForm from "./pages/JobOfferForm";

function App() {
  return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/add-job" element={<JobOfferForm />} />
                    <Route path="/jobs" element={<JobsPage />} />
                    <Route path="*" element={<NoPage/>}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>

  );
}

export default App;
