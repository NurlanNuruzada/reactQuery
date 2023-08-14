import { Home } from "../Pages/Home";
import {MainLayout} from "../Layouts/MainLayout"
import { useRoutes } from "react-router-dom";
import {PostCategory} from "../Pages/PostCategory";
import Delete from "../Pages/Delete";
import Update from "../Pages/update";
import { UpdateCategory } from "../Services/CategoryService";
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
                path:"/PostCategory",
                element:<PostCategory />
            },
            {
                path:"/Delete/:id",
                element:<Delete />
            },
            {
                path:"/Update/:id",
                element:<UpdateCategory />
            },
            
        ],
    }
];
    return useRoutes(routes)
}