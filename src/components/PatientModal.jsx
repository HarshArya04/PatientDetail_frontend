export default function PatientModal({ patient, onClose }) {
  if (!patient) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md sm:max-w-lg lg:max-w-xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">
          {patient.name}
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          <b>Age:</b> {patient.age}
        </p>
        <p className="text-sm sm:text-base text-gray-700">
          <b>Contact:</b> {patient.contact}
        </p>
        <p className="text-sm sm:text-base text-gray-700">
          <b>Email:</b> {patient.email || "N/A"}
        </p>
        <p className="text-sm sm:text-base text-gray-700">
          <b>City:</b> {patient.address || "N/A"}
        </p>
      </div>
    </div>
  );
}
