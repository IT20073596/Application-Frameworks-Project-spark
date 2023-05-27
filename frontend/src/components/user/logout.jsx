import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const response = await fetch("http://localhost:8060/users/logout", { method: "POST" });
            const data = await response.json();
            console.log(data.message);
            localStorage.removeItem("logged")
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Button variant="primary" onClick={handleLogout} style={{ margin: "10px", padding: "5px 10px", border: 'none', borderRadius: '5px' }}>
                Logout
            </Button>
        </div>
    );
};

export default Logout;