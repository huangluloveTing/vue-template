const Home = () => import('@/pages/home');

export default {
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
}