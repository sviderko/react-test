import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [pass, setPass] = useState("");
    let navigate = useNavigate();

    const login = () => {
        if (pass === "test") {
            return navigate("/");
        }
        setPass("");
    };

    return (
        <div>
            <input
                style={{ height: "2rem" }}
                type="text"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />
            <button onClick={login}>login</button>
        </div>
    );
};

export default LoginPage;
