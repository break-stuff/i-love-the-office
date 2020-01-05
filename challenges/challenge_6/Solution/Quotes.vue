<template>
    <div class="quotes">
        <h1>That's What She Said</h1>
        <hr />
        <div class="d-flex justify-content-between">
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
        </div>
        <div class="row row-cols-3 row-cols-md-2">
            <!-- Challenge 1 - Add quote snippet here -->
            <div
                v-for="characterQuote in characterQuotes"
                :key="characterQuote.quote"
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
    </div>
</template>

<script>
    import characters from "../data/characters";
    import quotes from "../data/quotes";
    import Quote from "../components/Quote";

    export default {
        name: "quotes",
        components: {
            Quote
        },
        data() {
            return {
                characters,
                quotes
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
            }
        }
    };
</script>

<style lang="scss">
</style>