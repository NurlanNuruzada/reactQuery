import Crud from "../Pages/Crud";
import { Home } from "../Pages/Home";
import {MainLayout} from "../Layouts/MainLayout"
import { useRoutes } from "react-router-dom";
export default function Routes() {
    let routes = [
        {
        path:"/",
        element: <MainLayout />,
        children: [
            {
                path:"/",
                element: <Home />
            },
            {
                path:"/Crud",
                element:<Crud />
            }
        ],
    }
];
    return useRoutes(routes)
}