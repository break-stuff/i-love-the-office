# Challenge 7 - Adding a Quote

## Summary

Now that you can create components, pass data to child components from the parent using `props`, and pass data back to the parent from the child using `events`, you are ready to create the form to create new quotes!

This challenge does use the modal from the [BootstrapVue](https://bootstrap-vue.js.org/) component library, but the usage will be kept to a minimum (not because it's not good, but because the goals is to teach you Vue, not BootstrapVue ;) ).

## Tasks

### Create the `NewQuoteModal` Component

1. In the `/src/components` folder, create a new file named `NewQuoteModal.vue`.
2. Just as we did before, populate the file with the following boilerplate code:

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

3. In the `<template>` section add the following HTML:

```html
<b-modal id="new-quote" size="lg" hide-footer title="New Quote">
    <form>
        <div class="form-group">
            <label for="character">Character</label>
            <select class="form-control" id="character">
                <option value>Select a Character</option>
                <option
                    value="<!-- Character ID -->"
                ><!-- Character name --></option>
            </select>
        </div>
        <div class="form-group">
            <label for="quote">Quote</label>
            <textarea class="form-control" id="quote" rows="3"></textarea>
        </div>
        <div class="text-right mt-3">
            <button class="btn btn-outline-primary">Cancel</button>
            <button class="ml-2 btn btn-primary">Save</button>
        </div>
    </form>
</b-modal>
```

4. In the `<script>` section in the exported object, name the component `NewQuoteModal`

---

### Add to Quotes Page

1. In the `Quotes.vue` page import your new `NewQuoteModal` component and register it in the components section - `import NewQuoteModal from '../components/NewQuoteModal';`
2. Add the `<new-quote-modal></new-quote-modal>` tag to the bottom of the `<template>` tag right before the last closing `</div>`
3. Add a method for opening the modal

```js
showModal() {
    this.$bvModal.show("new-quote");
}
```

4. Add a button to the top of the page and add a click event handler that will execute the `showModal()` method you just created. [documentation](https://vuejs.org/v2/guide/events.html)

```html
<button class="btn btn-primary mb-3">
    <i class="fas fa-plus"></i> Add Quote
</button>
```

_**Note:** You should now be able to open and close the modal so you can test the behavior_

---

### Build New Quote Form

1. In your `NewQuoteModal` component add a `data` section to the object and add a `newQuote` object:

```js
data() {
    return {
        newQuote: {
            id: 0,
            quote: "",
            characterId: 0,
            isFavorite: false
        }
    };
}
```

2. Bind the appropriate `newQuote` properties to the form in the template section ([documentation](https://vuejs.org/v2/guide/forms.html)).
3. Add a `props` section and create a prop to pass in the list of characters to populate the drop-down - `props: ['characters]`.
4. Like you did for the filter in the `Quotes.vue` page, use the `v-for` directive to build the drop-down options. ([documentation](https://vuejs.org/v2/guide/forms.html#Select))
5. In the `Quotes.vue` page add the prop for `characters` to the `<new-quote-modal>` component and bind it to the `characters` data source.

```html
<new-quote-modal :characters="characters"></new-quote-modal>
```

---

### Add Component Methods

1. Add a `methods` section to the object:

```js
methods: {

}
```

2. In the `methods` section add a method for hiding the modal:

```js
hideModal() {
    this.$bvModal.hide("new-quote");
}
```

3. The form should reset when the modal closes so add a method for resetting the `newQuote` values and add it to the `hideModal()` method.
4. Add a click event listener to the `Cancel` button that executes the `hideModal()` method.
5. Just as we did with the `Quote` component, we will use an event emitter to send the `newQuote` data to the `Quotes.vue` page. Add a method that will emit an event called `add-quote` when the form is submitted (don't forget to add the `newQuote` data property as the payload).

```js
handleSubmit() {
    this.$emit("add-quote", this.newQuote);
    this.hideModal();
}
```

6. Add a `@submit` event listener to the form and bind it to the `handleSubmit()` method you created. Be sure to add an event modifier to prevent the default form submission post-back behavior. ([documentation](https://vuejs.org/v2/guide/events.html#Event-Modifiers)).

---

### Add Quote to List

1. In the `Quotes.vue` page, create a new `method` named `addNewQuote` that takes a `newQuote` parameter.

```js
addNewQuote(newQuote) {
}
```

2. Create a unique ID for the quote by getting the length of the `quotes` array and adding 1 to it.
3. Add the `newQuote` to the `quotes` array.

```js
addNewQuote(newQuote) {
    newQuote.id = this.quotes.length + 1;
    this.quotes.push(newQuote);
}
```

4. Add an event listener to the `<new-quote-modal>` component for the `add-quote` event and bind it to the `addNewQuote` method.

```html
<new-quote-modal @add-quote="addNewQuote" :characters="characters"></new-quote-modal>
```

---

## Stretch Goal

1. Add form validation and error messages to the form (the `quote` and `characterId` values are both required).
2. Take advantage of `v-model` modifiers to reduce the amount of code needed. ([documentation](https://vuejs.org/v2/guide/forms.html#Modifiers))
