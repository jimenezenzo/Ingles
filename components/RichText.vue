<template>
  <div class="prose" v-html="$mdRenderer.render(block.body)"></div>
</template>

<script lang="ts" setup>
const props = defineProps({
  block: {
    type: Object,
    required: true,
  },
});
onBeforeMount(() => {
  !["body"].every((propName) => props.block.hasOwnProperty(propName))
    ? console.error(`RichText.vue has not pass the block property validation`)
    : null;
});
</script>

<style scoped>
    div {
        max-width: 100%;
    }
</style>