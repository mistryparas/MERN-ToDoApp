import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
