import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../../Layout/Main/Main';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import NotFound from '../../Pages/NotFound/NotFound';
import SignUp from '../../Pages/SignUp/SignUp';

const Routes = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/signup',
                    element:<SignUp></SignUp>
                }
            ]
        },
        {
            path:'*',
            element:<NotFound></NotFound>
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Routes;