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
import Contact from "./pages/Contact";
import ForEmployers from "./pages/ForEmployers";

function App() {
  return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/for-employers" element={<ForEmployers />} />
                    <Route path="/add-job" element={<JobOfferForm />} />
                    <Route path="/jobs" element={<JobsPage />} />
                    <Route path="*" element={<NoPage/>}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>

  );
}

export default App;
