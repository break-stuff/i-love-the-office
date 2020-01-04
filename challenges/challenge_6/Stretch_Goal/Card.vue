<template>
    <div :class="['card', 'img-' + imgDirection, 'rounded-0']">
        <img :src="imgSrc" class="card-img rounded-0" :alt="imgAlt" />
        <div class="card-body">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            imgDirection: {
                type: String,
                default: "top",
                validator(value) {
                    // The value must match one of these strings
                    return ["top", "bottom", "left", "right"].indexOf(value) !== -1;
                }
            },
            imgSrc: {
                type: String,
                default:
                    "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png"
            },
            imgAlt: {
                type: String,
                default: "Image Coming Soon"
            }
        }
    };
</script>

<style lang="scss">
    .card {
        align-items: flex-start;

        &.img-left {
            flex-direction: row;

            .card-img {
                width: 33%;
            }
        }

        &.img-right {
            flex-direction: row-reverse;

            .card-img {
                width: 33%;
            }
        }

        &.img-bottom {
            flex-direction: column-reverse;
        }
    }
</style>