<template>
    <Navbar></Navbar>
    <main class="bg-white md:bg-slate-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <ListSearch v-if="isSearch"></ListSearch>
        <slot v-else></slot>
    </main>
    <Footer></Footer>
</template>

<script setup>
const isSearch = useIsSearch()
</script>