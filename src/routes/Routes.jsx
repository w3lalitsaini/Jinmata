import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../layout/Layout'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Features from '../pages/Features'
import Menu from '../pages/Menu'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import CheckoutForm from '../pages/CheckoutForm'

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/features",
                element: <Features />
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "/gallery",
                element: <Gallery />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/checkout",
                element: <CheckoutForm />
            },
        ]
    }
])

const Routes = () => {
    return <RouterProvider router={routes} />
}

export default Routes