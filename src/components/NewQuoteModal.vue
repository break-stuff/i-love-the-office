<template>
    <b-modal id="new-quote" size="lg" hide-footer title="New Quote">
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="character">Character</label>
                <select v-model="newQuote.characterId" class="form-control" id="character" required>
                    <option value>Select a Character</option>
                    <option
                        v-for="character in characters"
                        :value="character.id"
                        :key="character.id"
                    >{{character.name}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="quote">Quote</label>
                <textarea v-model="newQuote.quote" class="form-control" id="quote" rows="3" required></textarea>
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
        name: "NewQuoteModal",
        props: ["characters"],
        data() {
            return {
                newQuote: {
                    id: 0,
                    quote: "",
                    characterId: 0,
                    isFavorite: false
                }
            };
        },
        methods: {
            hideModal() {
                this.$bvModal.hide("new-quote");
                this.resetForm();
            },
            resetForm() {
                this.newQuote = {
                    id: 0,
                    quote: "",
                    characterId: 0,
                    isFavorite: false
                };
            },
            handleSubmit() {
                this.$emit("add-quote", this.newQuote);
                this.hideModal();
            }
        }
    };
</script>

<style lang="scss">
</style>