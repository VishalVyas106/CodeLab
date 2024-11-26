// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import SubjectsPage from './pages/SubjectsPage';
import TeamPage from './pages/TeamPage';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes */}
          <Route 
            path="/subjects" 
            element={
              // <ProtectedRoute>
                <SubjectsPage />
              // </ProtectedRoute>
            } 
          />
          <Route 
            path="/team" 
            element={
              // <ProtectedRoute>
                <TeamPage />
              // </ProtectedRoute>
            } 
          />
          
          {/* Admin Routes */}
          <Route 
            path="/kakashi106vyasvishalisbigfanofnarutoandblech97262705539913972939" 
            element={ <AdminDashboard /> } and 
          />
          
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;