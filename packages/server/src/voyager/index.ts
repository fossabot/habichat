import { express } from 'graphql-voyager/middleware'
import { path as graphQLPath } from '../graphql/config'

export const path = `/voyager`
export const voyager = express({ endpointUrl: graphQLPath })
