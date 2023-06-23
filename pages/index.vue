<template class="bg-gray-200 font-sans leading-normal tracking-normal">
	<!--Header-->
	<div class="w-full m-0 p-0 bg-cover bg-bottom estilos-index">
		<div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
			<!--Title-->
				<p class="text-white font-extrabold text-3xl md:text-5xl">Lengua y Literatura</p>
				<p class="text-xl md:text-2xl text-white">Bienvenido al curso</p>
		</div>
	</div>
	<!--Container-->
	<div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
		<div class="mx-0 sm:mx-6">
			<div class="bg-gray-200 p-4 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
				<!--Lead Card-->
				<div class="flex h-full bg-white rounded overflow-hidden shadow-lg">
					<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg p-5">
						<div class="w-full font-bold text-xl text-gray-900 mb-5">Welcome fellow Tailwind CSS and Ghost fan</div>
						<p class="text-gray-800 font-serif text-base">
							This starter template is an attempt to replicate the default Ghost theme "Casper" using Tailwind CSS and vanilla Javascript.
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor accusantium cupiditate hic temporibus blanditiis nam iusto tempora suscipit adipisci ratione! Sint quas ratione dolore odit doloribus voluptatum corporis animi nemo?
							Veniam, aliquid. Vitae aliquid, officiis unde voluptatibus tempore voluptatem cupiditate magnam tenetur! Excepturi quidem, neque laudantium rerum eligendi necessitatibus exercitationem fugiat soluta ex debitis qui odit nesciunt eum. Recusandae, nostrum?
							Qui vero possimus nam, odio culpa sequi expedita delectus cupiditate vel rem assumenda. Quos consequuntur alias quam ullam, natus in reiciendis sunt vero libero doloribus reprehenderit pariatur velit repellat eaque?
							Ullam enim veritatis autem aspernatur maiores non necessitatibus, omnis, repudiandae nam neque debitis dolorem praesentium. Alias maxime temporibus ab id vero, deleniti impedit, asperiores iusto eius aspernatur minus eum cupiditate.
							Quibusdam corporis laboriosam quidem libero quos nulla, voluptate quod fuga architecto facilis laudantium magnam distinctio necessitatibus, repudiandae dicta repellendus quas unde eligendi officia? Sapiente, distinctio consequatur! Sequi officiis quod totam.
						</p>
					</div>
				</div>

				<!--Posts Container-->
				<div class="flex flex-wrap justify-between pt-12 -mx-6">
					<!--1/3 col -->
					<div v-for="post in posts" class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
						<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
							<NuxtLink :to="`/posts/${post.url}`" class="flex flex-wrap no-underline hover:no-underline">
								<img src="https://source.unsplash.com/collection/225/800x600" class="h-64 w-full rounded-t pb-6">
								<!-- <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p> -->
								<div class="w-full font-bold text-xl text-gray-900 px-6">{{ post.title }}</div>
								<p class="text-gray-800 font-serif text-base px-6 mb-5">{{ post.subtitle }}</p>
							</NuxtLink>
						</div>
						<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
							<div class="flex items-center justify-between">
								<img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
								<p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { usePosts } from '~/composables/post';

	useHead({
		title: 'Lengua y Literatura'
	})

	const posts = usePosts()
</script>

<style>
	.estilos-index {
		background-image: url("~/assets/img/book.jpg");
		height: 60vh;
		max-height:460px;
	}
</style>