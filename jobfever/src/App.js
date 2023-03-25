import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./components/login/Register";
import Home from "./components/welcomePage/WelcomePage";
import Login from "./components/login/LoginSheet";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NoPage/>}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>

    </div>
  );
}

export default App;
