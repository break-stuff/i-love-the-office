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
        </div>
        <div class="row row-cols-3 row-cols-md-2">
            <!-- Challenge 1 - Add quote snippet here -->
            <div
                v-for="characterQuote in characterQuotes"
                :key="characterQuote.quote"
                class="col mb-4"
            >
                <div class="card rounded-0">
                    <img
                        :src="characterQuote.character.image"
                        class="card-img rounded-0"
                        :alt="'image of' + characterQuote.character.name"
                    />
                    <div class="card-body">
                        <p class="card-text">{{characterQuote.quote}}</p>
                        <p
                            class="card-text text-right font-italic"
                        >- {{characterQuote.character.name}}</p>
                        <p class="card-text text-right">
                            <!-- Challenge 2 - Add favorite toggle here -->
                            <button
                                @click="updateFavorite(characterQuote.id)"
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
        <!-- Challenge 7 - Add modal to create new quote here -->
    </div>
</template>

<script>
    import characters from "../data/characters";
    import quotes from "../data/quotes";

    export default {
        name: "quotes",
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
    .card {
        align-items: flex-start;

        &.img-left {
            flex-direction: row;

            .card-img {
                width: 33%;
            }
        }

        &.img-right {
            flex-direction: row-reverse;

            .card-img {
                width: 33%;
            }
        }

        &.img-bottom {
            flex-direction: column-reverse;
        }
    }
</style>