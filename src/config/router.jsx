import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/(auth)/Login';
import Register from '../pages/(auth)/Register';
import ForgotPassword from '../pages/(auth)/ForgotPassword';
import NotFound from '../pages/not-found';
import { Dashboard } from "../pages/(admin)/dashboard";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "dashboard", 
                element: <Dashboard />,
            },
            // Auth routes
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />,
            },
            { // 404 (Not Found)
                path: "*",
                element: <NotFound />,
            },
        ],
    }
]);

export default router;