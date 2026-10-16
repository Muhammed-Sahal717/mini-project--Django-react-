import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api";

function StudentDetails() {
  const { id } = useParams();

  const [student, setStudent] = useState({
    name: "",
    age: "",
    email: "",
    course: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function getStudent() {
      try {
        const response = await api.get(`/${id}/`);
        setStudent(response.data);
      } catch (error) {
        console.error(error);
        setMessage("Failed to load student details. Please try again later.");
      }
    }

    getStudent();
  }, [id]);

  function handleChange(event) {
    setStudent({
      ...student,
      [event.target.name]: event.target.value,
    });
  }
  async function updateStudent() {
    try {
      await api.put(`/${id}/`, {
        name: student.name,
        age: Number(student.age),
        email: student.email,
        course: student.course,
      });
      setMessage("Student details updated successfully.");
    } catch (error) {
      console.error(error);
      setMessage("Failed to update student details. Please try again later.");
    }
  }

  async function updateCourse() {
    try {
      await api.patch(`/${id}/`, {
        course: student.course,
      });
      setMessage("Student details updated successfully.");
    } catch (error) {
      console.error(error);
      setMessage("Failed to update student details. Please try again later.");
    }
  }

  return (
    <div className="container">
      <h1>Student Details</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateStudent();
        }}
      >
        <input
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
          required
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        />
        <input
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
          required
        />
        <button type="submit">Update All (PUT)</button>{" "}
        <button type="button" onClick={updateCourse}>
          Update Course (PATCH)
        </button>
      </form>

      {message && <p>{message}</p>}

      <Link to="/students">Back to Students</Link>
    </div>
  );
}

export default StudentDetails;
