# Challenge 6 - Custom Events

## Summary

If you haven't noticed already, moving the quote content from the `Quotes.vue` page to the `Quote.vue` component, has broken our "favorites" functionality. Props are a way for a parent component to pass data to a child component, but we now need a way for our child components to pass data back to the parent.

### Ket Concepts

- [Custom Events](https://vuejs.org/v2/guide/components-custom-events.html)

---

## Tasks

1. In your `Quote.vue` component, add anew method named `toggleFavorite()`.
2. In the method body, trigger the event emitter with the name of "favorite-clicked" and pass the Quote ID in as the second parameter so that it gets passed to the event handler - `this.$emit("favorite-clicked", this.quoteId);` ([documentation](https://vuejs.org/v2/guide/components-custom-events.html))
3. In the `Quotes.vue` page, since we no longer have access to the button to listen to the `click` event, we will listen to the `favorite-clicked` event instead - `@favorite-clicked="updateFavorite"`
