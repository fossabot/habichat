import {} from '@cloudflare/workers-types'
import { ApolloServer } from 'apollo-server-cloudflare'
import { graphqlCloudflare } from 'apollo-server-cloudflare/dist/cloudflareApollo'
import { Request as ApolloRequest } from 'apollo-server-env'
import { config, path as graphQLPath } from '../graphql/config'

const server = new ApolloServer(config)

// TODO: Use a proper router

export const handleRequest = async (request: Request): Promise<Response> => {
  const apolloRequest = (request as any) as ApolloRequest
  const url = new URL(request.url)

  switch (url.pathname) {
    case graphQLPath:
      return graphqlCloudflare(() =>
        server.createGraphQLServerOptions(apolloRequest)
      )(apolloRequest) as Promise<any>
    case `/greg`:
      return new Response(``)
  }

  return new Response(`Not Found`, { status: 400 })
}
