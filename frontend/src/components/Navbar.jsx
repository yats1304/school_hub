import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-extrabold text-blue-600">
          SchoolHub
        </Link>

        {/* Links */}
        <div className="space-x-6">
          <Link
            to="/add"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Add School
          </Link>
          <Link
            to="/show"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Show Schools
          </Link>
        </div>
      </div>
    </nav>
  );
}
