import lunr from 'lunr'
import lunrStemmer from 'lunr-languages/lunr.stemmer.support'
import lunrEs from 'lunr-languages/lunr.es'

export default defineEventHandler(async event => {
	if (!('stemmerSupport' in lunr)) {
		lunrStemmer(lunr)
		lunrEs(lunr)
	}

	const query = getQuery(event)
	const searcher = await $fetch('/searcher.json')
	const lunrIndex = lunr.Index.load(searcher)

	return lunrIndex.search(String(query.q))
})