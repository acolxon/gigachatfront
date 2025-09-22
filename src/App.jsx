import MessageWrapper from "./components/MessageWrapper";
import Register from "./auth/Register.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    {/* Публичные маршруты */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />

                    {/* Приватные маршруты */}
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <MessageWrapper />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}
