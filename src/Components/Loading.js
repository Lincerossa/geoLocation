import React from 'react'
import styled from 'styled-components'

const Loading = () => (
  <Wrapper>
    <LogoContainer>
      <LogoWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true" width="52"><path d="M85.4 44s0-2-1.6-3c-1.6-.9-3-.4-3.3-.3l-7.8 4.1c-.6.3-1.2.5-1.9.5-2.1 0-3.8-1.7-3.8-3.8 0-1.4.8-2.6 1.9-3.3l7.8-4.9s1.4-1 1.4-3c0-1.9-1.7-2.9-1.8-2.9L53.1 13.9c-.2-.1-.7-.4-1.2-.4s-1 .3-1.2.4L27.6 27.5s-1.7 1-1.7 2.9c0 1.8 1.2 2.8 1.4 3l7.5 4.7c.6.3 1.1.8 1.4 1.4 1.1 1.8.4 4.2-1.4 5.2-1.2.7-2.7.7-3.8 0l-8.1-4.3s-1.6-.7-3.3.3c-1.6.9-1.6 2.9-1.6 3l-.2 26.8c0 .2 0 .8.3 1.2.2.4.8.8 1 .9l23.3 13.2s1.8 1 3.4.1c1.6-.9 1.9-2.4 1.9-2.7l.3-8.8c0-.7.2-1.3.5-1.9 1.1-1.8 3.4-2.5 5.2-1.4 1.2.7 1.9 2 1.9 3.3l.3 9.1s.2 1.7 1.9 2.7c1.6.9 3.3 0 3.4-.1l23.3-13.2c.2-.1.7-.4.9-.8.2-.4.3-1 .3-1.3L85.4 44zM74.1 65.2c-.4.6-1 1.1-1.7 1.3-.2.1-.5.1-.7.1-.5 0-1-.1-1.4-.4l-16.6-9.6c-.4-.2-1-.4-1.6-.4-.6 0-1.2.1-1.6.4L34 66.2c-.4.2-.9.4-1.4.4-.2 0-.5 0-.7-.1-.7-.2-1.3-.6-1.7-1.3-.4-.6-.5-1.4-.3-2.1.2-.7.6-1.3 1.3-1.7l16.6-9.6c.9-.5 1.6-1.8 1.6-2.8V30c0-.7.3-1.4.8-2 .5-.5 1.2-.8 2-.8.7 0 1.4.3 2 .8.5.5.8 1.2.8 2v19.1c0 1 .7 2.3 1.6 2.8l16.6 9.6c.6.4 1.1 1 1.3 1.7.1.7 0 1.4-.4 2"></path></svg>
      </LogoWrapper>
    </LogoContainer>
  </Wrapper>
)

const Wrapper = styled.div`
  &:after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black ;
    z-index: 201;
    opacity: 0.6;
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`
const LogoContainer = styled.div`
  position: relative;
  z-index: 203;
`
const LogoWrapper = styled.div`
  animation: pulsate 1s ease-out;
  animation-iteration-count: infinite;

  @keyframes pulsate {
    0% {
      transform: scale(1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  svg{
    height: 60px;
    fill: white;
  }
`

export default Loading
