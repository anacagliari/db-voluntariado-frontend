import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";
import Volunteers from "./pages/Volunteers";
import Beneficiary from "./pages/Baneficiary";

export default function App() {
  return (
    <Router>
      <body style={{ backgroundColor: "#d8d5c7" }}>
        <MyHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/beneficiary" element={<Beneficiary />} />
        </Routes>
        <MyFooter />
      </body>
    </Router>
  );
}
