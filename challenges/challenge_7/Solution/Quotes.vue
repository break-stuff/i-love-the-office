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
            <!-- Challenge 7 - Add button to create new quote here -->
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
                <quote
                    :character-img="characterQuote.character.image"
                    :character-name="characterQuote.character.name"
                    :quote="characterQuote.quote"
                    :quote-id="characterQuote.id"
                    :favorite="characterQuote.isFavorite"
                    @favorite-clicked="updateFavorite"
                ></quote>
            </div>
        </div>
        <!-- Challenge 7 - Add modal to create new quote here -->
        <new-quote-modal @add-quote="addNewQuote" :characters="characters"></new-quote-modal>
    </div>
</template>

<script>
    import axios from "axios";
    import Quote from "../components/Quote";
    import NewQuoteModal from "../components/NewQuoteModal";

    export default {
        name: "quotes",
        components: {
            Quote,
            NewQuoteModal
        },
        data() {
            return {
                characters: [],
                quotes: [],
                filterBy: ""
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
            updateFavorite(quoteId) {
                let quote = this.quotes.find(quote => quote.id === quoteId);
                quote.isFavorite = !quote.isFavorite;
            },
            showModal() {
                this.$bvModal.show("new-quote");
            },
            addNewQuote(newQuote) {
                newQuote.id = this.quotes.length + 1;
                this.quotes.push(newQuote);
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

<style lang="scss">
</style>