import {createHashRouter, RouterProvider} from "react-router-dom";

import {HomePage} from "pages/home/index";
import {Layout} from "app/layout"

const router = createHashRouter([
    {
        path: "/",
        element: <Layout><HomePage /></Layout>,
    },
]);


export const AppRouter = () => {
    return <RouterProvider router={router} />
}