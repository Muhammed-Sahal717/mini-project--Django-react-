import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const url = "http://127.0.0.1:8000/api/students/";

  function getStudents() {
    axios
      .get(url)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function addStudent(e) {
    e.preventDefault();

    const student = {
      name: name,
      age: age,
      email: email,
      course: course,
    };

    axios
      .post(url, student)
      .then(() => {
        setName("");
        setAge("");
        setEmail("");
        setCourse("");
        getStudents();
      })
      .catch((error) => {
        console.log(error.response?.data || error);
      });
  }

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      <h1>Student Details</h1>

      <h2>Add Student</h2>

      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <br />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
        <br />
        <br />

        <button type="submit">Add Student</button>
      </form>

      <h2>All Students</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Course</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
