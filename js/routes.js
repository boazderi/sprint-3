
import bookApp from "./view/book-app-cmp.js"
import homePage from "./view/home-page.cmp.js"
import aboutPage from "./view/about-page.cmp.js"
import bookDetails from "./view/book-details-cmp.js"
import bookAdd from "./cmps/book-add.cmp.js"

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: homePage
        },
        {
            path: '/book',
            component: bookApp,
            children:[

                {
                    path: '/book/:id',
                    component: bookDetails,
                    name:'details',
                    props:true
                }
            ]
        },
        {
            path: '/book/add',
            component: bookAdd
        },
        {
            path: '/about',
            component: aboutPage
        },
    ]
}

export const router = createRouter(routerOptions)