import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './AppWrite/auth';
import { login, logout } from './Store/authSlice';
import { Footer, Header } from './Components';
import { Outlet } from 'react-router-dom';

function App() {
    const [loading, setLoading] = useState(true);
    const dipatch = useDispatch();
    useEffect(() => {
        authService
            .getCurrentUser()
            .then((user) => {
                if (user) {
                    dipatch(login({ user }));
                } else {
                    dipatch(logout());
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return !loading ? (
        <div className=" min-h-screen  flex flex-wrap content-between bg-gray-400">
            <div className=" w-full block">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    ) : null;
}

export default App;
