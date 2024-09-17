<template>
    <button @click="handleVoice" class="p-1 border rounded-lg bg-white dark:bg-black dark:border-gray-700 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.2em" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 5.75v4.5h2.5l4 3V2.75l-4 3zm9 .5s1 .5 1 1.75s-1 1.75-1 1.75m1-6.5c2 1 3 2.5 3 4.75s-1 3.75-3 4.75"/></svg>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    text: string
}>()

const handleVoice = () => {
    if (window.responsiveVoice) {
        window.responsiveVoice.speak(props.text);
    } else {
        console.warn("ResponsiveVoice no está disponible");
    }
}
</script>