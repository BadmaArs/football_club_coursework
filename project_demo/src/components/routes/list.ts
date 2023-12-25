import Home from "../pages/home/Home";


export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        auth: true,
    },
    {
        path: '/profile/:id',
        exact: false,
        component: Home,
        auth: true,
    },
    {
        path: '/massegas',
        exact: true,
        component: Home,
        auth: true,
    },
    {
        path: '/massegas:id',
        exact: false,
        component: Home,
        auth: true,
    },
    {
        path: '/fiends/:id',
        exact: false,
        component: Home,
        auth: true,
    },
    {
        path: '/auth',
        exact: true,
        component: Home,
        auth: false,
    }
]