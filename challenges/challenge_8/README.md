# Challenge 8 - Adding New Pages

## Summary

Adding new pages is as easy as adding new components (because they are components). All you need to do in this challenge is to add a new `view` for the videos page and update the router and main menu to navigate tot that page.

### Key Concepts

- [Vue Router](https://router.vuejs.org/guide/)

---

## Tasks

### Create the `Videos.vue` View

1. In the `/src/views` folder, create a new file named `Videos.vue`.
2. Just as we did with our components, populate the file with the following boilerplate code:

    ```html
    <template>
        <div class="videos">
            <h1>I Can't Not Watch</h1>
            <hr />
        </div>
    </template>

    <script>
        export default {

        }
    </script>

    <style lang="scss">

    </style>
    ```

3. In the `/src/router/index.js` file, import the new `Videos` page - `import Videos from '../views/Videos.vue`
4. Add another route object tot he `routes` array:

    ```js
    {
        path: '/videos',
        name: 'videos',
        component: Videos
    }
    ```

5. In the `/src/layouts/PageHeader.vue`, update the `to` property for the `I Can't Not Watch` link to the new `videos` route

    ```html
    <router-link class="nav-link" to="/videos">I Can't Not Watch</router-link>
    ```

## Stretch Goal

Create a new `PageNotFound` page and and update the routing routing to handle any 404 errors. ([documentation](https://router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route))
