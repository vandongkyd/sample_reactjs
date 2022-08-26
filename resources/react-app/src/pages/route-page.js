import { lazy } from 'react'

const routes = [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('./home')),
    },
    {
        path: '/product',
        exact: true,
        component: lazy(() => import('./product')),
    },
];

export default routes;
