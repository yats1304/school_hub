import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AddSchool from "./components/AddSchool";
import Navbar from "./components/Navbar";
import ShowSchools from "./components/ShowSchool";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Navbar at top */}
      <Navbar />

      {/* Layout container: flex column, full viewport height */}
      <div className="flex flex-col min-h-screen pt-15">
        {/* Main content grows to fill space */}
        <main className="flex-grow ">
          <Routes>
            <Route path="/add" element={<AddSchool />} />
            <Route path="/show" element={<ShowSchools />} />
            <Route
              path="/"
              element={
                <div className="flex flex-col items-center justify-center min-h-[calc(100vh-7rem)] bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 sm:py-16 sm:px-8 rounded-lg shadow-md">
                  <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-3 text-center drop-shadow">
                    Welcome to <span className="text-blue-600">SchoolHub</span>
                  </h1>
                  <p className="text-sm sm:text-lg text-gray-600 mb-6 text-center max-w-xs sm:max-w-2xl leading-normal sm:leading-relaxed px-2">
                    Effortlessly browse, add, and manage school data all in one
                    place.
                    <br className="block sm:hidden" />
                    Start by exploring our schools database or add your own
                    institution!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md justify-center">
                    <Link
                      to="/show"
                      className="bg-blue-600 text-white px-5 py-2 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition w-full text-center"
                    >
                      View Schools
                    </Link>

                    <Link
                      to="/add"
                      className="bg-purple-500 text-white px-5 py-2 rounded-lg text-lg font-semibold shadow hover:bg-purple-700 transition w-full text-center"
                    >
                      Add School
                    </Link>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
