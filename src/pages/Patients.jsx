import { useEffect, useState } from "react";
import PatientCard from "../components/PatientCard";
import PatientModal from "../components/PatientModal";
import AddPatientForm from "../components/AddPatientForm";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((user, i) => ({
          id: user.id,
          name: user.name,
          age: 20 + i * 3,
          contact: user.phone,
          email: user.email || "N/A",
          address: user.address?.city || "N/A",
        }));
        setPatients(mapped);
        setFiltered(mapped);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load patients");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFiltered(
      patients.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, patients]);

  const handleAddPatient = (patient) => {
    const newPatient = {
      id: Date.now(),
      name: patient.name,
      age: patient.age,
      contact: patient.contact,
      email: patient.email || "N/A",
      address: patient.address || "N/A",
    };
    setPatients((prev) => [...prev, patient]);
  };

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-700">Loading patients...</p>
    );
  if (error)
    return (
      <p className="text-center mt-10 text-red-500 font-semibold">{error}</p>
    );

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 px-4 sm:px-8 lg:px-16 py-6">
      <AddPatientForm onAdd={handleAddPatient} />

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-md p-2 w-full mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onView={() => setSelectedPatient(patient)}
          />
        ))}
      </div>

      {selectedPatient && (
        <PatientModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
}
