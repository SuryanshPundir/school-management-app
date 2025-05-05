import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import Parent from "./pages/Parent";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes using Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="admin" element={<Admin />} />
          <Route path="student" element={<Student />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="parent" element={<Parent />} />
        </Route>

        {/* Routes without the layout (e.g., login pages) */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
