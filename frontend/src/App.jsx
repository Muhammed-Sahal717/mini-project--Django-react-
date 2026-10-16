import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import StudentList from "./pages/StudentList";
import StudentDetails from "./pages/StudentDetails";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/students">Students</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/:id" element={<StudentDetails />} />
      </Routes>
    </div>
  );
}

export default App;
