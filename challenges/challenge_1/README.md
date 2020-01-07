# Challenge 1 - Display Quotes

## Summary

Let's get started! First we need to pull in the quote data and render it on the page.

### Key Concepts

- [List Rendering](https://vuejs.org/v2/guide/list.html)
- [Template Syntax / Data Binding](https://vuejs.org/v2/guide/syntax.html)

---

## Tasks

1. Import the `quotes` and the `characters` data at the top of the `<scripts>` section of the `Quotes.vue` file:

    ```js
    import characters from '../data/characters';
    import quotes from '../data/quotes';
    ```

2. Create a computed property that gets the character image and adds it to the array of quotes using the following snippet ([documentation](!https://vuejs.org/v2/guide/computed.html)):

    ```js
    characterQuotes() {
        return quotes.map(q => ({
            ...q,
            character: characters.find(c => c.id === q.characterId)
        }));
    }
    ```

3. Using the `v-for` ([documentation](!https://vuejs.org/v2/guide/list.html)) directive, loop over the `characterQuotes` array returned from the computed property you created above and render it using the following HTML snippet:

    ```html
    <div class="col mb-4">
        <div class="card rounded-0">
            <img
                src="<!-- character image url -->"
                class="card-img rounded-0"
                alt="<!-- meaningful alt text for character image -->"
            />
            <div class="card-body">
                <p class="card-text"><!-- quote --></p>
                <p class="card-text text-right font-italic">
                    - <!-- character name -->
                </p>
                <p class="card-text text-right">
                    <!-- Challenge 2 - Add favorite toggle here -->
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
    ```

## Stretch Goal

Rather than import the data as an ES module, use [Axios](https://github.com/axios/axios) - _which is already installed_ - to get the data as an HTTP request from the following urls ([documentation](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)):

- `/data/characters.json`
- `/data/quotes.json`
