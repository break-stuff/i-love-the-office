# Challenge 4 - Custom Events

## Summary

If you haven't noticed already, moving the quote content from the `Quotes.vue` page to the `Quote.vue` component, has broken our "favorites" functionality. Props are a way for a parent component to pass data to a child component, but we now need a way for our child components to pass data back to the parent.

## Tasks

1. In the `/src/components` folder, create a new file named `Quote.vue`.
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

3. At the top of the `<script>` section in the `Quote.vue` component, import the Card component - `import Card from './Card';`
4. In the exported object in the `<script>` section (`export default {}`), add a name property - `name: 'Quote'`
5. In exported object, create a new components property (`components: {}`) and add assign the imported Card component to that property:

```js
components: {
    Card
}
```

5. Copy the markup for the quote from `Quotes.vue` template and paste it in the `<template>` section.
6. Create props for the data that you will need for the component with prop types and default values ('imgSrc', 'characterName', 'favorite', 'quote', 'quoteId') ([documentation](https://vuejs.org/v2/guide/components-props.html#Prop-Validation)).
7. Update the markup in your `<template>` with your prop data.
8. In the `Quotes.vue` page, import your `Quote` component and register it in the `components` object
9. Remove the `Card` import and registration.
10. Replace the `Card` and quote information with your new `Quote` component

10. Replace the current Card implementation in the `Quotes.vue` page with the new Card component.

```html
<quote
    :character-img="characterQuote.character.image"
    :character-name="characterQuote.character.name"
    :quote="characterQuote.quote"
    :quote-id="characterQuote.id"
    :favorite="characterQuote.isFavorite"
></quote>
```

## Stretch Goal

Add default values and validation to the `Card` component.
