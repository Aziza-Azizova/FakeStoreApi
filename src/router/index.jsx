import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import ProductsItem from "../pages/ProductsItem";

export const router = [
    {
        path: '/',
        name: 'Home',
        element: <Home />
    },
    {
        path: '/about',
        name: 'About',
        element: <About />
    },
    {
        path: '/products',
        name: 'Products',
        element: <Products />
    },
    {
        path: '/products/:id',
        element: <ProductsItem/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
]