import React from 'react'
import styled from 'styled-components'

import { Header } from '../Containers'

const WithLayout = WrappedComponents => props => (
  <Container>
    <Header {...props} />
    <Content>
      <WrappedComponents {...props} />
    </Content>
  </Container>
)

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`

const Content = styled.div`
  padding-top: 60px;
`

export default WithLayout