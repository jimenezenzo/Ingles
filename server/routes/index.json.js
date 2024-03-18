import lunr from 'lunr'
import lunrStemmer from 'lunr-languages/lunr.stemmer.support'
import lunrEs from 'lunr-languages/lunr.es'
import { serverQueryContent } from '#content/server'

const parse = arr => {
	return (function fx(input) {
		return input.children
			.map(child => {
				return child.type === 'text' ? child.value : fx(child)
			})
			.join('\n')
	})(arr)
}

export default defineEventHandler(async event => {
	if (!('stemmerSupport' in lunr)) {
		lunrStemmer(lunr)
		lunrEs(lunr)
	}

	const posts = await serverQueryContent(event, '/posts').find()

	const index = lunr(function () {
		this.field('title')
		this.field('content')
		this.ref('slug')
		this.use(lunr.es)

		posts.forEach(post => {
			this.add({
				title: post.title,
				content: parse(post.body),
				slug: post._path.split('/').pop(),
			})
		})
	})

	return index.toJSON()
})