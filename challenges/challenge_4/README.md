# Challenge 4 - Components

## Summary

The code is starting to get a little crowded. Right now this page is responsible for:

1. Getting the list of quotes
2. Filtering the list
3. Managing custom styles for the Card
4. Rendering and controlling quote-specific actions

It is usually a good idea to try to keep a component's functionality as close to 1 task as possible. Let's see if we can split some of these parts out into reusable parts.

Let's start with moving the code for the `Card` isolated into its own component

## Tasks

### Create a New Component

1. In the `/src/components` folder, create a new file named `Card.vue`.
2. Populate the file with the following boilerplate code:

    ```html
    <template>

    </template>

    <script>
        export default {

        }
    </script>

    <style lang="scss">

    </style>
    ```

3. In the `Quotes.vue` page, cut the content out of the `<style>` section and paste it into the `<style>` section of the `Card.vue` component.
4. Add the following code to the `<templates>` section add the following basic Card markup:

    ```html
    <div :class="['card', 'img-', 'rounded-0']">
        <img
            :src=""
            class="card-img rounded-0"
            :alt=""
        />
        <div class="card-body">
        </div>
    </div>
    ```

5. In the exported object in the `<script>` section (`export default {}`), add a name property - `name: 'Card'`
6. In the same object, add a `props` property and assign it an array of the values we want to pass into the component = `props: ['imgDirection', 'imgSrc', 'imgAlt']`
7. Add a `<slot />` in between the `<div class="card-body"></div>` tags.

---

### Use Your New `Card` Component

1. At the top of the `<script>` section in the `Quotes.vue` page, import your new Card component - `import Card from '../components/Card';`
2. In exported object, create a new components property (`components: {}`) and add assign the imported component to that property:

    ```js
    components: {
        Card
    }
    ```

3. Replace the current Card implementation in the `Quotes.vue` page with the new Card component.

    ```html
    <card
        img-direction="left"
        :img-src="characterQuote.character.image"
        :img-alt="'image of ' + characterQuote.character.name"
        :class="{ 'shadow' : characterQuote.isFavorite }"
    >
        <p class="card-text">{{characterQuote.quote}}</p>
        <p class="card-text text-right font-italic">- {{characterQuote.character.name}}</p>
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
    </card>
    ```
