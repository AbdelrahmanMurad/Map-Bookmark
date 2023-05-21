import { createContext, useState } from "react";
import { API_URL } from "../config"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useLocalStorage("user", null);//return [storedValue, setValue];
    const [token, setToken] = useLocalStorage("token", null);
    const [error, setError] = useState(null);

    const login = async (creds) => {
        //creds => credintials
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: creds.nameLogin,
                password: creds.passwordLogin,
            }),
        });

        const data = await res.json();
        if (data.email) {
            const user = {
                email: data.email,
                username: data.username,
            }
            setUser(user);
            setToken(data.token);
            // stores in localStorage
            setError(null);// الامور سليمة
            navigate("/map");
        } else {
            setError(data.message);
        }
    };

    const register = async (creds) => {
        const res = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: creds.email,
                username: creds.name,
                password: creds.password,
                repeat_password: creds.passwordConfirmation,
            }),
        });

        const data = await res.json();
        if (data.token) {
            const user = {
                email: creds.email,
                username: creds.name,
            }
            setUser(user);
            setToken(data.token);
            setError(null);
            navigate("/map");
        }

    };

    const logout = () => {
        setUser(null);
        setToken(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider
            value={{ user, token, error, login, register, logout }} //public on the project
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;