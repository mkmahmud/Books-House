import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../../Layout/Main/Main';
import Books from '../../Pages/Books/Books';
import Cart from '../../Pages/Cart/Cart';
import CategorySearch from '../../Pages/CategorySearch/CategorySearch';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Profile from '../../Pages/MyAccount/Profile/Profile';
import MyBooked from '../../Pages/MyBooked/MyBooked';
import NotFound from '../../Pages/NotFound/NotFound';
import PendingAproval from '../../Pages/PendingAproval/PendingAproval';
import SellBook from '../../Pages/SellBook/SellBook';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
                },
                {
                    path:'myaccount',
                    element:<Profile></Profile>
                },
                {
                    path:'cart',
                    element:<PrivateRoute><Cart></Cart></PrivateRoute>
                },
                {
                    path:'sellbook',
                    element:<SellBook></SellBook>
                },
                {
                    path:'/pendingaproval',
                    element:<PendingAproval></PendingAproval>
                },
                {
                    path:'/books',
                    element: <Books></Books>
                },
                {
                    path:'/books/:categoryName',
                    loader:  async ({params}) => {
                        return fetch(`http://localhost:5000/books/${params.categoryName}`)
                    } ,
                    element: <CategorySearch></CategorySearch>
                },
                {
                    path:'/mybooked',
                    element:<MyBooked></MyBooked>
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