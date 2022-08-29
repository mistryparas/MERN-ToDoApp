import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Crud from "../../routes/Crud/Crud";
import Todo from "../../routes/Todo/Todo";
import Home from "../../routes/Home/Home";
import Swagger from "../../routes/Swagger/Swagger";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <main className="main">
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
      </main>
      <Outlet />
      <Footer />
    </>
  );
}
