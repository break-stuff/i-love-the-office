# Challenge 6 - Add Quote

## Summary

Create a form in a modal to add a new quote to the list

## Tasks

1. Add a button to the top of the page using the following code:

```html
<button class="btn btn-primary" v-b-modal.add-modal><i class="fas fa-plus"></i> Add Quote</button>
```

2. Use the `v-for` directive to populate the `<options>` with data from the `characters` object array.
3. Add a new `data` property named `filterBy` and bind it to the `<select>` element ([documentation](https://vuejs.org/v2/guide/forms.html#Select)).
4. Update the `characterQuotes()` computed property to filter by the `filterBy` value using the following snippet:

```js
characterQuotes() {
    let characterQuotes = this.quotes.map(q => ({
        ...q,
        character: this.characters.find(c => c.id === q.characterId)
    }));

    return this.filterBy 
        ? characterQuotes.filter(cq => cq.character.id === this.filterBy)
        : characterQuotes;
}
```

## Stretch Goal

Add a box-shadow ([documentation](https://getbootstrap.com/docs/4.4/utilities/shadows/)) to the `card` element for the quotes where the `isFavorite` property is `true` ([documentation][https://vuejs.org/v2/guide/class-and-style.html]).
