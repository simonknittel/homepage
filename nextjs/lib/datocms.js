import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client"

export const client = new ApolloClient({
  uri: `https://graphql.datocms.com/environments/${ process.env.DATO_CMS_ENVIRONMENT || 'master' }`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: 'Bearer 83956640cf317cab838d08c35d9767'
  }
})

export function pathFromSlug(slug) {
  let normalizedSlug = slug

  normalizedSlug = normalizedSlug.slice(1)

  if (normalizedSlug === '') {
    return []
  }

  return normalizedSlug.split('/')
}

export function slugForDatoCMS(slug) {
  let normalizedSlug = '/'

  if (slug) normalizedSlug += slug.join('/')

  return normalizedSlug
}
