<template>
    <div class="videos">
        <h1>I Can't Not Watch</h1>
        <hr />
        <div class="d-flex justify-content-between align-items-end mb-3">
            <button class="btn btn-primary ml-auto" @click="showModal()">
                <i class="fas fa-plus"></i> Add Video
            </button>
        </div>

        <div class="row row-cols-3 row-cols-md-2">
            <div v-for="video in videos" :key="video.url" class="col mb-4 text-center">
                <embedded-video :url="video.url"></embedded-video>
            </div>
        </div>
        <new-video-modal @add-video="addNewVideo"></new-video-modal>
    </div>
</template>

<script>
    import videos from "../data/videos";
    import EmbeddedVideo from "../components/EmbeddedVideo";
    import NewVideoModal from "../components/NewVideoModal";

    export default {
        name: "Videos",
        components: {
            EmbeddedVideo,
            NewVideoModal
        },
        data() {
            return {
                videos
            };
        },
        methods: {
            showModal() {
                this.$bvModal.show("new-video");
            },
            addNewVideo(newVideo) {
                newVideo.id = this.videos.length + 1;
                this.videos.push(newVideo);
            }
        }
    };
</script>

<style lang="scss">
</style>
