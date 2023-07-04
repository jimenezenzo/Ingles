<template>
  <div class="prose dark:prose-invert" v-html="$mdRenderer.render(block.body)"></div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    block: {
      type: Object,
      required: true,
    },
  });
</script>

<style scoped>
    div {
      max-width: 100%;
    }
</style>