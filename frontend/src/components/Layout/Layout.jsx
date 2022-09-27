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
import { ProtectedRoutes, PublicRoutes, useIdentity } from "../../hooks/IdentityProvider";

export default function Layout() {
  const [sidebarOpen, setsidebarOpen] = useState(false); // State passed as props
  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setsidebarOpen={setsidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setsidebarOpen={setsidebarOpen}/> 
      <main className={`main ${sidebarOpen ? "sidebar-open" : ""}`}>
        <Routes>
          <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
          <Route path="CRUD" element={<ProtectedRoutes><Crud /></ProtectedRoutes>} />
          <Route path="swagger" element={<ProtectedRoutes><Swagger /></ProtectedRoutes>} />
          <Route path="todo" element={<ProtectedRoutes><Todo /></ProtectedRoutes>} />
          <Route path="signup" element={<PublicRoutes><SignupForm /></PublicRoutes> } />
          <Route path="login" element={<PublicRoutes><LoginForm /></PublicRoutes>} />
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
