import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <body style={{ backgroundColor: "#d8d5c7" }}>
        <MyHeader />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <MyFooter />
      </body>
    </Router>
  );
}
