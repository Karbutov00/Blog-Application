import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase-config";

function App() {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    let navigate = useNavigate();

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            navigate("/login");
        });
    };
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>

                {!isAuth ? (
                    <Link to="/login">Log In</Link>
                ) : (
                    <>
                        <Link to="/post">Create Post</Link>
                        <a onClick={signUserOut}>Log Out</a>
                    </>
                )}
            </nav>
            <Routes>
                <Route path="/" element={<Home isAuth={isAuth} />} />
                <Route
                    path="/login"
                    element={<Login setIsAuth={setIsAuth} />}
                />
                <Route path="/post" element={<CreatePost isAuth={isAuth} />} />
            </Routes>
        </div>
    );
}

export default App;
