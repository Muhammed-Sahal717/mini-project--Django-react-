import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Student Management</h1>
      <Link to="/students">View Students</Link>
    </div>
  );
}

export default Home;
