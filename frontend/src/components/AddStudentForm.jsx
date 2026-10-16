import { useState } from "react";
import api from "../api";

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

      await getStudents(); // Refresh the student list after adding a new student
    } catch (error) {
      console.error(error);
      setError("Failed to add student. Please try again later.");
    }
  }

  return (
    <form onSubmit={addStudent}>
      <h2>Add Student</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
      />

      <button type="submit">Add Student</button>

      {error && <p>{error}</p>}
    </form>
  );
}

export default AddStudentForm;
