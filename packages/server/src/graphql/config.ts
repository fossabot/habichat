import { gql, makeExecutableSchema } from 'apollo-server-cloudflare'

const query = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => `Hello, world!`,
  },
}

const schema = makeExecutableSchema({
  typeDefs: [query],
  resolvers,
})

export const path = `/graphql`

export const config = {
  schema,
  introspection: true,
}
