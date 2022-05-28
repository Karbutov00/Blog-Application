import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    };
    return (
        <div className="login">
            <div className="login-content">
                <p>Sign In With Google</p>
                <button
                    onClick={signInWithGoogle}
                    className="login-with-google-btn"
                >
                    Sign In With Google
                </button>
            </div>
        </div>
    );
};

export default Login;
