import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Cart from "../../Pages/Cart";
import Home from "../../Pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
])