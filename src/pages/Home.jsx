import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen px-4 sm:px-8 lg:px-16 text-center bg-gray-50">
      <img src={Logo} alt="Jarurat Care" className="h-24 w-auto mb-6" />

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600">
        Welcome to Jarurat Care
      </h1>
      <p className="mt-4 text-gray-700 text-lg sm:text-xl">
        Manage and view patient records with ease.
      </p>

      <Link
        to="/patients"
        className="mt-6 sm:mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors"
      >
        View Patients
      </Link>
    </div>
  );
}
