import { useState } from "react";
import Message from "./pages/Message.jsx";
import Register from "./auth/Register.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login.jsx";
import Profile from "./pages/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import PublicRoute from "./components/PublicRoute.jsx";
export default function App() {
    const [activeChat, setActiveChat] = useState(null);

    return (
        <>
            <Router>
                <Routes>
                    {/* Публичные маршруты */}
                    <Route
                        path="/register"
                        element={
                            <PublicRoute>
                                <Register />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        }
                    />

                    {/* Приватные маршруты */}
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Message />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}
