import "./app.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { CreateTournament } from "./screens/CreateTournament";
import { ListTournament } from "./screens/ListTournament";
import { Navbar } from "./components/Navbar";
import LoginForm from "./screens/Login";
import { NotFound } from "./screens/NotFound";
// import { SelectListTournament } from "./screens/SelectListTournament";
import CardScreen from "./screens/CardScreen";
export function App() {
  const isAuthenticated = !!localStorage.getItem("user");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/List" replace /> : <LoginForm />
          }
        />
        {/* Protected routes: Only accessible if authenticated */}
        <Route
          path="/CreateTournament"
          element={
            isAuthenticated ? <CreateTournament /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/ListTournament"
          element={
            isAuthenticated ? <ListTournament /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/List"
          element={
            isAuthenticated ? <CardScreen /> : <Navigate to="/" replace />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
