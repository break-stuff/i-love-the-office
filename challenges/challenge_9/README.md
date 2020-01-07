# Challenge 9 - Populating the Videos Page (optional)

## Summary

This challenge is completely optional. It is here for some additional practice.

---

## Tasks

### Add Videos to the Page

1. Using the following snippet, create a, `EmbeddedVideo.vue` component and bind it to the following props - url, height, width (be sure to add prop validation and default values).

    ```html
    <iframe
        width="400"
        height="225"
        src="https://www.youtube.com/embed/9AzbTkZYDcE"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
    ```

2. Validate that the url is a `YouTube` video.
3. Import your component into the `Videos.vue` page.
4. As you have done with the `quotes` and `characters`, in the `Videos.vue` page, get the `videos` data and bind it to a `data` source.
5. Loop over the `videos` using a `v-for` directive and bind the video data to the `<embedded-video>` component.
6. Create a form component to add new videos to the list.
