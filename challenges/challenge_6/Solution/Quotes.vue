<template>
    <div class="quotes">
        <h1>That's What She Said</h1>
        <hr />
        <div class="d-flex justify-content-between align-items-end">
            <!-- Challenge 3 - Add drop-down filter here -->
            <div class="form-group">
                <label for="character-filter">Select Quotes By Character:</label>
                <select class="form-control" id="character-filter" v-model="filterBy">
                    <option value>All Quotes</option>
                    <option
                        v-for="character in characters"
                        :value="character.id"
                        :key="character.id"
                    >{{character.name}}</option>
                </select>
            </div>
            <!-- Challenge 6 - Add button to create new quote here -->
            <button class="btn btn-primary mb-3" @click="showModal()">
                <i class="fas fa-plus"></i> Add Quote
            </button>
        </div>
        <div class="row row-cols-3 row-cols-md-2">
            <!-- Challenge 1 - Add quote snippet here -->
            <div
                v-for="characterQuote in characterQuotes"
                :key="characterQuote.id"
                class="col mb-4"
            >
                <div :class="['card', 'rounded-0', { 'shadow' : characterQuote.isFavorite }]">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img
                                :src="characterQuote.character.image"
                                class="card-img rounded-0"
                                :alt="'image of' + characterQuote.character.name"
                            />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <p class="card-text">{{characterQuote.quote}}</p>
                                <p
                                    class="card-text text-right font-italic"
                                >- {{characterQuote.character.name}}</p>
                                <p class="card-text text-right">
                                    <!-- Challenge 2 - Add favorite toggle here -->
                                    <button
                                        @click="toggleFavorite(characterQuote.id)"
                                        class="btn btn-default btn-sm"
                                        v-b-tooltip.hover
                                        title="like"
                                        style="font-size: 1.5rem;"
                                    >
                                        <span class="sr-only">like</span>
                                        <i v-if="!characterQuote.isFavorite" class="far fa-heart"></i>
                                        <i v-else class="fas fa-heart text-danger"></i>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Challenge 6 - Add modal to create new quote here -->
        <b-modal id="add-quote" size="lg" hide-footer title="Add Quote">
            <div class="d-block text-center">
                <h3>Hello From My Modal!</h3>
            </div>
            <div class="text-right mt-3">
                <button class="btn btn-outline-primary" @click="hideModal()">Cancel</button>
                <button class="ml-2 btn btn-primary" @click="handleSubmit()">Save</button>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "quotes",
        data() {
            return {
                characters: [],
                quotes: [],
                filterBy: "",
                newQuote: {
                    id: 0,
                    quote: "",
                    characterId: 0,
                    isFavorite: false
                }
            };
        },
        computed: {
            characterQuotes() {
                let characterQuotes = this.quotes.map(q => ({
                    ...q,
                    character: this.characters.find(c => c.id === q.characterId)
                }));

                return this.filterBy
                    ? characterQuotes.filter(
                          cq => cq.character.id === this.filterBy
                      )
                    : characterQuotes;
            }
        },
        methods: {
            toggleFavorite(quoteId) {
                let quote = this.quotes.find(quote => quote.id === quoteId);
                quote.isFavorite = !quote.isFavorite;
            },
            showModal() {
                this.$bvModal.show("add-quote");
            },
            hideModal() {
                this.$bvModal.hide("add-quote");
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
                this.newQuote.id = this.quotes.length + 1;
                this.quotes.push(this.newQuote);
                this.hideModal();
            }
        },
        mounted() {
            axios
                .get("/data/characters.json")
                .then(response => (this.characters = response.data));

            axios
                .get("/data/quotes.json")
                .then(response => (this.quotes = response.data));
        }
    };
</script>
