<template>
    <b-modal id="new-video" size="lg" hide-footer title="New Video">
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="video-url">Video URL</label>
                <input type="url" v-model="newVideo.url" class="form-control" id="video-url" />
            </div>
            <div class="text-right mt-3">
                <button class="btn btn-outline-primary" @click="hideModal()">Cancel</button>
                <button class="ml-2 btn btn-primary">Save</button>
            </div>
        </form>
    </b-modal>
</template>

<script>
    export default {
        name: "NewVideoModal",
        data() {
            return {
                newVideo: {
                    url: "",
                    id: 0
                }
            };
        },
        methods: {
            hideModal() {
                this.$bvModal.hide("new-video");
                this.resetForm();
            },
            resetForm() {
                this.newVideo = {
                    url: "",
                    id: 0
                };
            },
            handleSubmit() {
                this.$emit("add-video", this.newVideo);
                this.hideModal();
            }
        }
    };
</script>

<style lang="scss" scoped>
</style>