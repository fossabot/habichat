import 'cross-fetch/polyfill'
import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
  uri:
    'https://leveraging-the-power-of-a-typed-schema.gregbrimble.workers.dev/graphql',
})
