<template class="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <main class="bg-white md:bg-slate-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100 grow min-h-screen">
        <slot></slot>
    </main>
    <Footer></Footer>
</template>
