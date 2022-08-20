import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import App from "./App";
import Crud from "./routes/crud";
import Swagger from "./routes/swagger";
import Todo from "./routes/todo";
import Home from "./routes/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
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
  </BrowserRouter>
);
