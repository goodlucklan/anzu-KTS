import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateTournament } from "./screens/CreateTournament";
import { ListTournament } from "./screens/ListTournament";
import { Navbar } from "./components/Navbar";
import LoginForm from "./screens/Login";
export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateTournament />} />
        <Route path="/ListTournament" element={<ListTournament />} />
        <Route path="/Login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}
