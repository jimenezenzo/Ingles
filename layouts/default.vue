<template class="flex flex-col h-screen">
    <Navbar class="sticky top-0 z-50"></Navbar>
    <main class="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 grow min-h-screen">
        <slot></slot>
    </main>
    <Footer class="sticky bottom-0 z-50"></Footer>
</template>
