import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Container } from "./components/ui";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { useAuth } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import TaskFormPage from "./pages/TaskFormPage";
import TasksPage from "./pages/TasksPage";

function App() {
  const { isAuth,loading } = useAuth();
  if(loading){
    return(
      <h1>LOADING....</h1>
    )
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          element={<ProtectedRoute isAllowed={!isAuth} redirectTo="/tasks" />}
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route
          element={<ProtectedRoute isAllowed={isAuth} redirectTo="/login" />}
        >
          <Route
            element={
              <TaskProvider>
                <Outlet />
              </TaskProvider>
            }
          >
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks/new" element={<TaskFormPage />} />
            <Route path="/tasks/:id/edit" element={<TaskFormPage />} />
          </Route>

          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
