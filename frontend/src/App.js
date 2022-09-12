import { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { IdentityProvider } from "./hooks/IdentityProvider";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <IdentityProvider>
        <Layout />
      </IdentityProvider>
    </BrowserRouter>
  );
};

export default App;
