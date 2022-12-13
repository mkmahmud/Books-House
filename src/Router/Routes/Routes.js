import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../../Layout/Main/Main';

const Routes = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path:'/',
                    element:<>Home</>
                }
            ]
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Routes;