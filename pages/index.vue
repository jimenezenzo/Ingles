<template>
	<div class="leading-normal tracking-normal">
		<div class="w-full m-0 p-0 bg-cover bg-bottom estilos-index">
			<div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
				<p class="text-white mb-2 font-extrabold text-3xl md:text-5xl">English 2nd year</p>
				<p class="text-xl md:text-2xl text-white">Welcome to the course</p>
			</div>
		</div>

		<div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
			<div class="mx-0 sm:mx-6">
				<div class="bg-gray-200 dark:bg-gray-700 p-4 w-full text-xl md:text-2xl text-gray-800 dark:text-gray-300 leading-normal rounded-t">
					<div class="flex h-full bg-white rounded overflow-hidden shadow-lg">
						<div class="flex-1 bg-white dark:bg-gray-800 rounded-t rounded-b-none overflow-hidden shadow-lg p-5">
							<ContentRenderer class="prose max-w-none dark:prose-invert" :value="data"/>
						</div>
					</div>
					<Posts></Posts>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const { data } = await useAsyncData(
		'presentacion', 
		() => queryContent('_presentacion').where({ _partial: true }).findOne()
	)
	
	useHead({
		title: 'Home'
	})
</script>

<style>
	.estilos-index {
		background-image: url("~/assets/img/book.jpg");
		height: 60vh;
		max-height:460px;
	}
</style>