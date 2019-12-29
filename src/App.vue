<template>
    <div id="app">
        <page-header></page-header>
        <main class="container border shadow-sm">
            <router-view />
        </main>
        <page-footer></page-footer>
    </div>
</template>

<script>
    import PageHeader from "./layouts/PageHeader";
    import PageFooter from "./layouts/PageFooter";
    export default {
        components: {
            PageHeader,
            PageFooter
        }
    };
</script>
<style lang="scss">
    html,
    body {
        height: 100%;
        background-color: white;
        font-family: "Open Sans", sans-serif;

        #app {
            display: flex;
            flex-direction: column;
            min-height: 100%;

            header {
                flex-shrink: 0;
            }

            main {
                background-color: white;
                flex-grow: 1;
                flex-shrink: 0;
            }

            footer {
                flex-shrink: 0;
            }
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-family: "Courier Prime", monospace;
        }
    }
</style>
