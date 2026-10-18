import { useState } from "react";
import api from "../api";
import { Plus } from "lucide-react";

function AddStudentForm({ getStudents }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [error, setError] = useState(null);

  async function addStudent(event) {
    event.preventDefault();

    try {
      await api.post("/", {
        name,
        age,
        email,
        course,
      });
      setName("");
      setAge("");
      setEmail("");
      setCourse("");
      setError("");

      await getStudents();
    } catch (error) {
      console.error(error);
      setError("Failed to add student. Please try again later.");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-1";

  return (
    <form
      onSubmit={addStudent}
      className="mb-6 rounded-xl border border-neutral-200 bg-yellow-50 p-5"
    >
      <h2 className="mb-4 text-lg font-semibold">Add Student</h2>

      <div className="grid gap-3 sm:grid-cols-2">
        <input
          className={inputClass}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className={inputClass}
          type="number"
          placeholder="Age"
          min="1"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <input
          className={inputClass}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className={inputClass}
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-green-800"
      >
        <Plus size={16} />
        Add Student
      </button>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
    </form>
  );
}

export default AddStudentForm;
