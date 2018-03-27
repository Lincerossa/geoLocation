import React from 'react'
import styled from 'styled-components'

import { Header } from '../Containers'

const withLayout = WrappedComponents => props => (
  <Container>
    <Header />
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

export default withLayout