// Frontend Structure (React + Tailwind CSS)
// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SubjectsPage from './pages/SubjectsPage';
import { AuthProvider } from './context/AuthContext';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/subjects" element={<SubjectsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;


