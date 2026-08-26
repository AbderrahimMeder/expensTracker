import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/(auth)/Login"));
const Register = lazy(() => import("../pages/(auth)/Register"));
const About = lazy(() => import("../pages/(marketing)/about"));
const Features = lazy(() => import("../pages/(marketing)/features"));
const Reports = lazy(() => import("../pages/(marketing)/reports"));
const Dashboard = lazy(() => import("../pages/(admin)/dashboard"));
const ForgotPassword = lazy(() => import("../pages/(auth)/ForgotPassword"));
const NotFound = lazy(() => import("../pages/not-found"));
const Faq = lazy(()=>import("../pages/(marketing)/faq"))
const Contact = lazy(()=>import("../pages/(marketing)/contact"))
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
            // marketing pages 
            {
                path:"about",
                element:<About />
            },
            {
                path:'features',
                element:<Features />
            },
            {
                path: 'reports',
                element: <Reports />,
            },
            {
                path:'faq',
                element:<Faq />
            },
            {
                path:'contact',
                element:<Contact />
            },
            { // 404 (Not Found)
                path: "*",
                element: <NotFound />,
            },
        ],
    }
]);

export default router;