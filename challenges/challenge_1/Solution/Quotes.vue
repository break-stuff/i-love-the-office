<template>
    <div class="quotes">
        <h1>That's What She Said</h1>
        <hr />
        <div class="d-flex justify-content-between align-items-end">
            <!-- Challenge 3 - Add drop-down filter here -->
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
                            <button
                                class="btn btn-default btn-sm"
                                v-b-tooltip.hover
                                title="like"
                                style="font-size: 1.5rem;"
                            >
                                <span class="sr-only">like</span>
                                <i class="far fa-heart"></i>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
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
                return this.quotes.map(q => ({
                    ...q,
                    character: this.characters.find(c => c.id === q.characterId)
                }));
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