import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api";
import { Pencil, ArrowLeft } from "lucide-react";

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
      setTimeout(() => {
        setMessage("");
      }, 3000);
      setMessage("Student details updated successfully.");
    } catch (error) {
      console.error(error);
      setMessage("Failed to update student details. Please try again later.");
    }
  }

  // async function updateCourse() {
  //   try {
  //     await api.patch(`/${id}/`, {
  //       course: student.course,
  //     });
  //     setTimeout(() => {
  //       setMessage("");
  //     }, 3000);
  //     setMessage("Student details updated successfully.");
  //   } catch (error) {
  //     console.error(error);
  //     setMessage("Failed to update student details. Please try again later.");
  //   }
  // }

  const inputClass =
    "w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-600 focus:ring-1";

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-xl border border-neutral-200 bg-yellow-50 p-6">
        <h1 className="mb-6 text-2xl font-semibold tracking-tight">
          Student Details
        </h1>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            updateStudent();
          }}
        >
          <input
            className={inputClass}
            name="name"
            placeholder="Name"
            value={student.name}
            onChange={handleChange}
            required
          />

          <input
            className={inputClass}
            name="age"
            type="number"
            placeholder="Age"
            min="1"
            value={student.age}
            onChange={handleChange}
            required
          />

          <input
            className={inputClass}
            name="email"
            type="email"
            placeholder="Email"
            value={student.email}
            onChange={handleChange}
            required
          />

          <input
            className={inputClass}
            name="course"
            placeholder="Course"
            value={student.course}
            onChange={handleChange}
            required
          />

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-yellow-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-yellow-800 cursor-pointer"
            >
              <Pencil size={15} />
              Update All
            </button>

            {/* <button
              type="button"
              onClick={updateCourse}
              className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium hover:bg-yellow-100 cursor-pointer"
            >
              Update Course (PATCH)
            </button> */}
          </div>
        </form>

        {message && (
          <p className="mt-4 rounded-lg bg-neutral-100 p-3 text-sm text-neutral-700">
            {message}
          </p>
        )}

        <Link
          to="/students"
          className="mt-5 inline-block text-sm text-neutral-600 underline underline-offset-4 hover:text-black"
        >
          <ArrowLeft size={16} className="inline-block mr-2" />
          Back to Students
        </Link>
      </div>
    </div>
  );
}

export default StudentDetails;
