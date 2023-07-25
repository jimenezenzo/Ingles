<template class="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <main class="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 grow min-h-screen">
        <slot></slot>
    </main>
    <Footer></Footer>
</template>
