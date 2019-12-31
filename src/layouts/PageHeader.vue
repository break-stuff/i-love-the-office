<template>
    <header>
        <b-navbar type="dark" variant="dark">
            <b-navbar-brand href="#" class="text-center">
                I
                <i class="fas fa-heart"></i>
                <br />The Office
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/quotes">That's What She Said</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">I Can't Not Watch</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" title="Favorites" to="/favorites">
                            <span class="sr-only">Favorites</span>
                            <i class="fas fa-heart"></i>
                        </router-link>
                    </li>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>

<script>
    export default {};
</script>
<style lang="scss">
    .navbar {
        .navbar-brand {
            font-family: "Courier Prime", monospace;
        }
    }
</style>
