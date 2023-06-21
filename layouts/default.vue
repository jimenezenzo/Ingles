<template>
    <div>
        <header>
            <Navbar></Navbar>
        </header>
        <main>
            <slot></slot>
        </main>
        <Footer></Footer>
    </div>
</template>

<script setup>
    const currentYear = new Date().getUTCFullYear();
</script>