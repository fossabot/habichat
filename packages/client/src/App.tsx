import React, { useState } from 'react'
import styled from 'styled-components/native'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'

import { gql } from 'apollo-boost'
import { client } from './client'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const MainText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
`

const GraphQLTest = () => {
  const { loading, error, data } = useQuery(
    gql`
      {
        hello
      }
    `
  )

  if (loading) return <MainText>Loading...</MainText>
  if (error) return <MainText>Error!</MainText>

  return <MainText>{data.hello}</MainText>
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Container>
        <GraphQLTest />
      </Container>
    </ApolloProvider>
  )
}

export default App
