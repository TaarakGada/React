import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './Store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Protected from './Components/AuthLayout.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import AllPosts from './Pages/AllPosts.jsx';
import AddPost from './Pages/AddPost.jsx';
import EditPost from './Pages/EditPost.jsx';
import Post from './Pages/Post.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: (
                    <Protected authentication={false}>
                        <Login />
                    </Protected>
                ),
            },
            {
                path: '/signup',
                element: (
                    <Protected authentication={false}>
                        <Signup />
                    </Protected>
                ),
            },
            {
                path: '/all-posts',
                element: (
                    <Protected authentication>
                        {' '}
                        <AllPosts />
                    </Protected>
                ),
            },
            {
                path: '/add-post',
                element: (
                    <Protected authentication>
                        {' '}
                        <AddPost />
                    </Protected>
                ),
            },
            {
                path: '/edit-post/:slug',
                element: (
                    <Protected authentication>
                        {' '}
                        <EditPost />
                    </Protected>
                ),
            },
            {
                path: '/post/:slug',
                element: <Post />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
