import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "../20.03.25/Login";
import Profile from "../20.03.25/Profile";  
import ProtectedRoute from "../20.03.25/ProtectRoute";

function AppLog() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route 
          path="/profile/:username"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile  />
            </ProtectedRoute>
          } 
        />  
      </Routes>
    </BrowserRouter>
  );
}

export default AppLog;


