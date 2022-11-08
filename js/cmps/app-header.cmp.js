export default {
    name: 'header-cmp',
    template: `
        <header class="app-header flex justify-between">
            <h1 class="logo">Miss Book</h1>
            <nav class="flex justify-between align-items-end">
                <router-link class="nav-link"  to="/">Home</router-link>
                <router-link class="nav-link" to="/book">Books</router-link>
                <router-link class="nav-link" to="/about">About</router-link>
            </nav>
        </header>
    `,
}