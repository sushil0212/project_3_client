import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import JobsAds from "./pages/JobsAds";
import Shorts from "./pages/Shorts";
import Payment from "./pages/Payment";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/Private";
import AnonRoute from "./components/Anon";
import Activity from "./components/Activity";
import Preview from "./pages/Preview";
import VacancyRequired from "./pages/VacancyRequired";
import GenerateVideo from "./pages/GenerateVideo";
import ProfilePage from "./components/ProfilePage";
import DetailsPage from "./pages/DetailsPage";
import Notifications from "./pages/Notifications";

import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/signup"
          element={
            <AnonRoute>
              <Signup />
            </AnonRoute>
          }
        />
        <Route
          path="/login"
          element={
            <AnonRoute>
              <Login />
            </AnonRoute>
          }
        />
        <Route
          path="/profile"
          element={<ProfilePage />}
        />
        <Route
          path="/activity"
          element={<Activity />}
        />
        <Route
          path="/preview/:videoId"
          element={<Preview />}
        />
        <Route
          path="/vacancy-required/:jobId"
          element={<VacancyRequired />}
        />
        <Route
          path="/jobs-ads"
          element={
            <PrivateRoute>
              <JobsAds />
            </PrivateRoute>
          }
        />
        <Route
          path="/shorts"
          element={
            <PrivateRoute>
              <Shorts />
            </PrivateRoute>
          }
        />
        <Route
          path="/generate-video/:jobId"
          element={<GenerateVideo />}
        />
        <Route
          path="/shorts/:shortId"
          element={
            <PrivateRoute>
              <DetailsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />

        <Route
          path="/notifications"
          element={
            <PrivateRoute>
              <Notifications />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
