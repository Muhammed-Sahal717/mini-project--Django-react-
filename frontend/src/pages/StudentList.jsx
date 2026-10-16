import { useState, useEffect } from "react";
import api from "../api";
import AddStudentForm from "../components/AddStudentForm";
import { Link } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  async function getStudents() {
    try {
      const response = await api.get("students/");
      setStudents(response.data);
      setError("");
    } catch (error) {
      console.error(error);
      setError("Failed to load students. Please try again later.");
    }
  }

  async function deleteStudent(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?",
    );
    if (!confirmDelete) return;

    try {
      await api.delete(`/${id}/`);
      getStudents(); // Refresh the list after deletion
    } catch (error) {
      console.error(error);
      setError("Failed to delete student. Please try again later.");
    }
  }
  useEffect(() => {
    (async () => {
      await getStudents();
    })();
  }, []);

  return (
    <div className="container">
      <h1>Student List</h1>

      <AddStudentForm getStudents={getStudents} />

      {error && <p>{error}</p>}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>
                <Link to={`/students/${student.id}`}>View / Edit</Link>{" "}
                <button onClick={() => deleteStudent(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
