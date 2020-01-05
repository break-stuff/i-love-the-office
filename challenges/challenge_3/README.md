# Challenge 3 - Filter List

## Summary

Add drop-down to filter quotes by character. If no user is selected, show all quotes.

### Key Concepts

- [Computed Properties](https://vuejs.org/v2/guide/computed.html)
- [Form Input Binding](https://vuejs.org/v2/guide/forms.html)

---

## Tasks

1. At the top of the `Quotes` view, add a drop-down using the following code snippet:

    ```html
    <div class="form-group">
        <label for="character-filter">Select Quotes By Character:</label>
        <select class="form-control" id="character-filter">
            <option value="">All Quotes</option>
            <option value="<!-- Character ID -->"><!-- Character Name --></option>
        </select>
    </div>
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
