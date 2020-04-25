import React from "react";
import { Link } from 'react-router-dom';

import { useAppContext } from '../context/AppContext';

export default function Home() {
    const { isAuthenticated } = useAppContext();

    return (
        <div>
            <div>
                <h1>Home</h1>
                <p>Welcome to Consult-A-Colleague!</p>

                {!isAuthenticated &&
                    <Link to="/login">Login</Link>
                }
            </div>
        </div>
    );
}
