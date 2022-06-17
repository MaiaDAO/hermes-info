import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://andromeda-graph.metis.io/subgraphs/name/maia-dao/hermes',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://andromeda-graph.metis.io/subgraphs/name/maia-dao/hermes',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://andromeda-graph.metis.io/subgraphs/name/maia-dao/hermes',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://andromeda-graph.metis.io/subgraphs/name/maia-dao/hermes',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://andromeda-graph.metis.io/subgraphs/name/maia-dao/hermes',
  }),
  cache: new InMemoryCache(),
})
