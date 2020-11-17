export default {
    path: '/film',
    component: () => import('../../views/film/film.vue'),
    children: [
        {
            path: 'nowplaying',
            component: () => import('@/views/film/NowPlaying'),
        },
        {
            path: 'comingsoon',
            component: () => import('@/views/film/ComingSoon'),
        },
        {
            path: '/flim',
            component: () => import('@/views/film/ComingSoon'),
        },
    ]
}