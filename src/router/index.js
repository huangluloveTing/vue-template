const Home = () => require('@/pages/home')

export default {
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
}