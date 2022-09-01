import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Crud from "../../routes/Crud/Crud";
import Todo from "../../routes/Todo/Todo";
import Home from "../../routes/Home/Home";
import SignupForm from "../../routes/Signup/Signup";
import LoginForm from "../../routes/Login/Login";
import Swagger from "../../routes/Swagger/Swagger";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";

export default function Layout() {
  const [sidebarOpen, setsidebarOpen] = useState(false); // State passed as props
  return (
    <>
      <Navbar/>
      <Sidebar sidebarOpen={sidebarOpen} setsidebarOpen={setsidebarOpen}/> 
      <main className={`main ${sidebarOpen ? "sidebar-open" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="CRUD" element={<Crud />} />
          <Route path="Swagger" element={<Swagger />} />
          <Route path="Signup" element={<SignupForm />} />
          <Route path="Login" element={<LoginForm />} />
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
