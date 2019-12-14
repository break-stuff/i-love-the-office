<template>
    <div id="app">
        <page-header></page-header>
        <router-view />
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
<style lang="scss"></style>
