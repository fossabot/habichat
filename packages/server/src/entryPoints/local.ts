import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { config, path as graphQLPath } from '../graphql/config'
import { voyager, path as voyagerPath } from '../voyager'

const app = express()
const server = new ApolloServer(config)

app.use(voyagerPath, voyager)
server.applyMiddleware({ app, path: graphQLPath })

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${graphQLPath}`)
})
