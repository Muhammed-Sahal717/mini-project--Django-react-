import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import StudentList from "./pages/StudentList";
import StudentDetails from "./pages/StudentDetails";

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <nav className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
          <Link to="/" className="text-lg font-semibold">
            Student Management
          </Link>
          <Link to="/" className="text-sm text-neutral-600 hover:text-black">
            Home
          </Link>
          <Link
            to="/students"
            className="text-sm text-neutral-600 hover:text-black"
          >
            Students
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-5 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/:id" element={<StudentDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
