import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/Layout";
import Homepage from "@/pages/Homepage";
import NotFound from "@/pages/NotFound";
import ServicesPage from "@/pages/ServicesPage";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/Profile";
// import Settings from "./pages/Settings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        // errorElement: <Error404 />,
        children: [
            {
                path: "",
                element: <Homepage />,
            },
            {
                path: "about",
                // element: <About />,
            },
            {
                path: 'jobs',
                element: <ServicesPage />,
                // errorElement: "<div className='bg-red-400'>error</div>"
            },
            {
                path: "dashboard",
                // element: <Dashboard />,
                children: [
                    {
                        path: "profile",
                        // element: <Profile />,
                    },
                    {
                        path: "settings",
                        // element: <Settings />,
                    },
                ],
            },
            {
                path: "*", // Catch-all route
                element: <NotFound />
            },
        ],
    },
]);

export default router;
