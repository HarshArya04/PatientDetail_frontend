import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Jarurat Care" className="h-10 w-auto" />
          <span className="font-bold text-xl sm:text-2xl text-blue-600">
            Jarurat Care
          </span>
        </Link>

        <div className="space-x-4 hidden md:flex">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/patients"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Patients
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
        </div>

        <div className="md:hidden"></div>
      </div>
    </nav>
  );
}
