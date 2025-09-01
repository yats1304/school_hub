import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddSchool from "./components/AddSchool";
import Navbar from "./components/Navbar";
import ShowSchools from "./components/ShowSchool";

function App() {
  return (
    <Router>
      {/* Navbar at top */}
      <Navbar />

      {/* Add margin to avoid navbar overlap */}
      <div className="pt-15">
        <Routes>
          <Route path="/add" element={<AddSchool />} />
          <Route path="/show" element={<ShowSchools />} />
          <Route
            path="/"
            element={
              <h1 className="text-center text-2xl">Welcome to SchoolHub </h1>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
