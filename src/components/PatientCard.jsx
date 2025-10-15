export default function PatientCard({ patient, onView }) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col justify-between hover:shadow-lg transition-shadow">
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800">
          {patient.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-700">Age: {patient.age}</p>
        <p className="text-sm sm:text-base text-gray-700">
          Contact: {patient.contact}
        </p>
      </div>
      <button
        onClick={onView}
        className="mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors text-sm sm:text-base"
      >
        View Details
      </button>
    </div>
  );
}
