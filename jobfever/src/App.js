import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CandidateLogin from "./pages/CandidateLogin";
import CandidateRegister from "./pages/CandidateRegister";
import CandidateProfile from "./pages/CandidateProfile";
import EmployerLogin from "./pages/EmployerLogin";
import EmployerRegister from "./pages/EmployersRegister";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import JobsPage from "./pages/JobsPage";
import JobOfferForm from "./pages/JobOfferForm";
import ForEmployers from "./pages/ForEmployers";
import Contact from "./pages/Contact";

function App() {
  return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/candidate/register" element={<CandidateRegister />} />
                    <Route path="/candidate/login" element={<CandidateLogin />} />
                    <Route path="/candidate/candidate-id" element={<CandidateProfile/>} />
                    <Route path="/employer/login" element={<EmployerLogin />} />
                    <Route path="/employer/register" element={<EmployerRegister />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/add-job" element={<JobOfferForm />} />
                    <Route path="/jobs" element={<JobsPage />} />
                    <Route path="/for-employers" element={<ForEmployers />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NoPage/>}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
  );
}

export default App;
