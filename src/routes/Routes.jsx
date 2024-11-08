import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../components/Home";
import Login from "../components/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "login", element: <Login /> },
        ],
    },
]);

export default router;
