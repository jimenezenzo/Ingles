<template>
	<div class="w-full m-0 p-0 bg-cover bg-bottom estilos-index">
		<div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
			<p class="text-white mb-2 font-extrabold text-3xl md:text-5xl">English</p>
			<p class="text-xl md:text-2xl text-white">Welcome to the course</p>
		</div>
	</div>

	<div class="container px-4 mx-auto -mt-32 max-w-8xl">
		<Posts></Posts>
	</div>
</template>

<script setup>
	useHead({
		title: 'Home'
	})
</script>

<style>
	.estilos-index {
		background-image: url("~/assets/img/book.jpg");
		height: 40vh;
		max-height:460px;
	}
</style>