# Challenge 2 - Favorites

## Summary

Toggle the `isFavorite` property on the quote object and change the button style based on its value.

### Key Concepts

- [Conditional Rendering](https://vuejs.org/v2/guide/conditional.html)
- [Event Handling](https://vuejs.org/v2/guide/events.html)

---

## Tasks

1. Create a method named `updateFavorite` that takes in the quote ID ([documentation](https://v1.vuejs.org/guide/events.html))
2. Find the quote by its ID and toggle the `isFavorite` property
3. Add a `click` event listener to the favorite button and assign it the `updateFavorite` you created.
4. Update the markup to use the `v-if` directive ([documentation]()) to display a different icon based on whether or not the property is `true`:

    ```html
    <i class="fas fa-heart text-danger"></i>
    ```

## Stretch Goal

Add a box-shadow ([documentation](https://getbootstrap.com/docs/4.4/utilities/shadows/)) to the `card` element for the quotes where the `isFavorite` property is `true` ([documentation](https://vuejs.org/v2/guide/class-and-style.html)).
