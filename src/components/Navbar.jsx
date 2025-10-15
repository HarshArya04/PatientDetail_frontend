import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 sm:px-8 lg:px-16 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <h1 className="text-2xl font-bold mb-2 sm:mb-0">Jarurat Care</h1>
      <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
        <li>
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/patients" className="hover:text-gray-200">
            Patients
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
