// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
// import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Registration from './pages/Registration';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';

import './index.css';
import './assets/css/fonts.css';
import './assets/css/styles.css';
import './assets/css/header.css';
import './assets/css/home.css';
import './assets/css/auth.css';
import './assets/css/footer.css';
import './assets/css/vehicle-registeration.css';

function App() {
  return (
    <Router>
      <div id="app-wrapper" className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Registration />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
          </Route>
        </Routes>

        {/* Toast Container */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;