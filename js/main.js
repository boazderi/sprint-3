import { router } from "./routes.js"
import appHeader from "./cmps/app-header.cmp.js"
import appFooter from "./cmps/app-footer.cmp.js"

const { createApp } = Vue

//import <componentName> from '<dir> + .js'

const options = {
    template: `
        <section>
            <app-header />
            <router-view />
            <app-footer />
        </section>
    `,
    components: {
        appHeader,
        appFooter
    }
    // camel case names of components with comma in the end of line
}

const app = createApp(options)
app.use(router)
app.mount('#app')