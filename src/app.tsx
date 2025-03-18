import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateTournament } from "./screens/CreateTournament";
import { ListTournament } from "./screens/ListTournament";
import { Navbar } from "./components/Navbar";
export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateTournament />} />
        <Route path="/ListTournament" element={<ListTournament />} />
      </Routes>
    </Router>
  );
}
