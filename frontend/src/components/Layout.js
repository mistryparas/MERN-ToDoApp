import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Crud from "../routes/crud";
import Swagger from "../routes/swagger";
import Todo from "../routes/todo";
import Home from "../routes/home";

export default function Layout() {
  return (
    <div className="Layout">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="CRUD" element={<Crud />} />
        <Route path="Swagger" element={<Swagger />} />
        <Route path="ToDo" element={<Todo />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}
