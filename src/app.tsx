import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateTournament } from "./screens/CreateTournament";
import { ListTournament } from "./screens/ListTournament";
import { Navbar } from "./components/Navbar";
import LoginForm from "./screens/Login";
// import { SelectListTournament } from "./screens/SelectListTournament";
import CardScreen from "./screens/CardScreen";
export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/CreateTournament" element={<CreateTournament />} />
        <Route path="/ListTournament" element={<ListTournament />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/List" element={<CardScreen />} />
      </Routes>
    </Router>
  );
}
