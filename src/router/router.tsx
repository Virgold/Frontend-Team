import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/Layout";
import Homepage from "@/pages/Homepage";
import NotFound from "@/pages/NotFound";
import JobsPage from "@/pages/JobsPage";
import ServicesPage from "@/pages/ServicesPage";
import UnderConstruction from "@/pages/UnderConstruction";
import ComingSoon from "@/pages/ComingSoon";
import ColorDemo from "@/components/colorDemo";
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
                path: 'jobs',
                element: <JobsPage />,
            },
            {
                path: 'services',
                element: <ServicesPage />
            },
            {
                path: 'coming-soon',
                element: <ComingSoon />
            },
            {
                path: 'contact',
                element: <UnderConstruction />
            },
            {
                path: 'under-construction',
                element: <UnderConstruction />
            },
            {
                path: 'colors',
                element: <ColorDemo />
            },
            {
                path: "*", // Catch-all route
                element: <NotFound />
            },
        ],
    },
]);

export default router;
