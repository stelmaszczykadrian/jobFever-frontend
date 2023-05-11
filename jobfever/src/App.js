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
import JobsPage from "./pages/JobsPage";
import JobOfferForm from "./pages/JobOfferForm";
import ForEmployers from "./pages/ForEmployers";
import Contact from "./pages/Contact";
import SingleOfferPage from "./pages/SingleOfferPage";
import EmployerProfile from "./pages/EmployerProfile";
import Layout from "./pages/Layout";
import EditJobOffer from "./pages/EditJobOffer";
import ChangePassword from "./pages/ChangePassword";
import {ProtectedRoute} from "./pages/ProtectedRoot/ProtectedRoot";
function App() {
    return (

            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/candidate/register" element={<CandidateRegister/>}/>
                        <Route path="/candidate/login" element={<CandidateLogin/>}/>
                        <Route path="/candidate/:id" element={
                            <ProtectedRoute>
                            <CandidateProfile/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/employer/login" element={<EmployerLogin/>}/>
                        <Route path="/change-password/:token" element={<ChangePassword/>}/>
                        <Route path="/employer/register" element={<EmployerRegister/>}/>
                        <Route path="/employer/:id" element={
                            <EmployerProfile/>
                        }/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/add-job" element={
                            <ProtectedRoute role={"EMPLOYER"}>
                            <JobOfferForm/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/jobs" element={<JobsPage/>}/>
                        <Route path="/for-employers" element={<ForEmployers/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/job/:id" element={<SingleOfferPage/>}/>
                        <Route path="/job/:id/edit" element={
                            <ProtectedRoute role={"EMPLOYER"}>
                            <EditJobOffer/>
                            </ProtectedRoute>
                        }></Route>
                        <Route path="*" element={<NoPage/>}></Route>
                    </Routes>
                </Layout>
            </BrowserRouter>

    );
}

export default App;
