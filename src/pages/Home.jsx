import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen px-4 sm:px-8 lg:px-16 bg-gray-50">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-600 text-center">
        Welcome to Jarurat Care
      </h1>
      <p className="mt-4 text-gray-600 text-lg sm:text-xl text-center max-w-2xl">
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
