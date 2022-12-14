import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../../Layout/Main/Main';
import Books from '../../Pages/Books/Books';
import SearchBooks from '../../Pages/Books/SearchBooks';
import BoostedBooks from '../../Pages/BoostedBooks/BoostedBooks';
import Cart from '../../Pages/Cart/Cart';
import CategorySearch from '../../Pages/CategorySearch/CategorySearch';
import HomeSlider from '../../Pages/Home/Banar/HomeSlider/HomeSlider';
import Home from '../../Pages/Home/Home';
import Loader from '../../Pages/Loader/Loader';
import Login from '../../Pages/Login/Login';
import Profile from '../../Pages/MyAccount/Profile/Profile';
import MyAdded from '../../Pages/MyAdded/MyAdded';
import MyBooked from '../../Pages/MyBooked/MyBooked';
import NotFound from '../../Pages/NotFound/NotFound';
import PendingAproval from '../../Pages/PendingAproval/PendingAproval';
import SellBook from '../../Pages/SellBook/SellBook';
import Nav from '../../Pages/Shared/Navbar/Nav';
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
                    element:<PrivateRoute><Profile></Profile></PrivateRoute>
                },
                {
                    path:'cart',
                    element:<PrivateRoute><Cart></Cart></PrivateRoute>
                },
                {
                    path:'sellbook',
                    element:<PrivateRoute><SellBook></SellBook></PrivateRoute>
                },
                {
                    path:'/pendingaproval',
                    element:<PrivateRoute><PendingAproval></PendingAproval></PrivateRoute>
                },
                {
                    path:'/books',
                    element: <Books></Books>
                },
                { 
                    path:'/books/:categoryName',
                    loader:  async ({params}) => {
                        return fetch(`https://bookhouse-server-mkmahmud.vercel.app/books/${params.categoryName}`)
                    } ,
                    element: <CategorySearch></CategorySearch>
                },
                { 
                    path:'/mybooked',
                    element:<PrivateRoute><MyBooked></MyBooked></PrivateRoute>
                },
                {
                    path:'/books/search/:searchValue',
                    element: <PrivateRoute><Books></Books></PrivateRoute>
                },
                {
                    path:'myAdded',
                    element: <PrivateRoute><MyAdded></MyAdded></PrivateRoute>
                },
                {
                    path:'boosted',
                    element: <PrivateRoute><BoostedBooks></BoostedBooks></PrivateRoute>
                },
                
            ]
        },
        {
            path:'*',
            element:<NotFound></NotFound>
        },
        {
            path:'/test',
            element: <Loader></Loader>
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Routes;