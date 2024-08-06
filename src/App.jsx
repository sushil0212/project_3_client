import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Navbar from "./components/Navbar";
import Anon from "./components/Anon";

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
            <Anon>
              <Signup />
            </Anon>
          }
        />
        <Route
          path="/login"
          element={
            <Anon>
              <Login />
            </Anon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
