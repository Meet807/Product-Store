import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/createPage";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";  // ✅ Import ThemeProvider correctly

function App() {
  return (
    <ThemeProvider>
      <div style={{ minHeight: "100vh" }}> {/* ✅ Replaced Box with div */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

