import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./screens/home/App.jsx";
import { MovieDetails } from "./screens/movie/MovieDetails.jsx";
import { Layout } from "./components/Layout";

export function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<App />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}
