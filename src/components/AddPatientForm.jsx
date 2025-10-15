import { useState } from "react";

export default function AddPatientForm({ onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !contact) return;

    onAdd({
      id: Date.now(),
      name,
      age,
      contact,
      email: email || "N/A",
      address: address || "N/A",
    });

    setName("");
    setAge("");
    setContact("");
    setEmail("");
    setAddress("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border p-4 rounded mb-6 bg-gray-50 shadow-sm w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto"
    >
      <h3 className="text-lg font-bold mb-2">Add New Patient</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <input
        type="number"
        placeholder="Contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <input
        type="email"
        placeholder="Email (optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Address (optional)"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors w-full"
      >
        Add Patient
      </button>
    </form>
  );
}
