import { useState, useEffect } from "react";
import api from "../api";
import AddStudentForm from "../components/AddStudentForm";
import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  async function getStudents() {
    try {
      const response = await api.get("/");
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
      getStudents();
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
    <div>
      <h1 className="mb-6 text-2xl font-semibold tracking-tight">
        Student List
      </h1>

      <AddStudentForm getStudents={getStudents} />

      {error && (
        <p className="mb-4 rounded-lg border border-neutral-200 bg-white p-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-neutral-200 bg-neutral-100 text-neutral-600">
            <tr>
              <th className="px-4 py-3 font-medium">ID</th>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Age</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Course</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-neutral-200">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-neutral-50">
                <td className="px-4 py-3 text-neutral-500">{student.id}</td>
                <td className="px-4 py-3 font-medium">{student.name}</td>
                <td className="px-4 py-3">{student.age}</td>
                <td className="px-4 py-3">{student.email}</td>
                <td className="px-4 py-3">{student.course}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/students/${student.id}`}
                      aria-label={`Edit ${student.name}`}
                      title="Edit student"
                      className="rounded-md border border-neutral-300 p-2 text-neutral-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Pencil size={15} />
                    </Link>

                    <button
                      onClick={() => deleteStudent(student.id)}
                      aria-label={`Delete ${student.name}`}
                      title="Delete student"
                      className="rounded-md border border-neutral-300 p-2 text-neutral-700 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
