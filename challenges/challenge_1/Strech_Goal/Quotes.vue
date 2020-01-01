<template>
    <div class="quotes">
        <div class="row row-cols-3 row-cols-md-2">
            <!-- Challenge 1 - Add quote snippet here -->
            <div v-for="characterQuote in characterQuotes" :key="characterQuote.quote" class="col mb-4">
                <div class="card rounded-0">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img :src="characterQuote.character.image" class="card-img rounded-0" :alt="'image of' + characterQuote.character.name" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <p class="card-text">{{characterQuote.quote}}</p>
                                <p class="card-text text-right font-italic">- {{characterQuote.character.name}}</p>
                                <p class="card-text text-right">
                                    <button class="btn btn-default btn-sm" 
                                            v-b-tooltip.hover title="like"
                                            style="font-size: 1.5rem;">
                                        <span class="sr-only">like</span>
                                        <i class="far fa-heart"></i>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "quotes",
        data() {
            return {
                characters: [],
                quotes: []
            };
        },
        computed: {
            characterQuotes() {
                return this.quotes.map(q => ({
                    ...q,
                    character: this.characters.find(c => c.id === q.characterId)
                }));
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
