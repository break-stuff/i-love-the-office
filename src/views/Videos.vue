<template>
    <div class="videos">
        <h1>I Can't Not Watch</h1>
        <hr />
        <div class="row row-cols-3 row-cols-md-2">
            <div v-for="video in videos" :key="video.url" class="col mb-4 text-center">
                <embedded-video :url="video.url"></embedded-video>
            </div>
        </div>
    </div>
</template>

<script>
    import videos from "../data/videos";
    import EmbeddedVideo from "../components/EmbeddedVideo";

    export default {
        name: "Videos",
        components: {
            EmbeddedVideo
        },
        data() {
            return {
                videos
            };
        }
    };
</script>

    <style lang="scss">
</style>
