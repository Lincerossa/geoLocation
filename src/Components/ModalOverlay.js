import React from 'react'
import Modal from 'react-modal';
import styled from 'styled-components'

const modalStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0,
  bottom: 0,
  overflow: 'scroll',
  '-webkit-overflow-scrolling': 'touch',
  left: 0,
  border: '1px solid yellow',
  right: 0,
  backgroundColor: '#000',
  overlay: { 
    zIndex: 1 
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 'none',
    borderRadius: 0,
    padding: '1rem',
  }
}


const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  border: '1px solid red',
  overflow: 'scroll',
  '-webkit-overflow-scrolling': 'touch',
  left: 0,
  right: 0,
  zIndex: 'auto',
  backgroundColor: 'transparent',
  opacity: 0.6,
  width: 'calc(100% - 15px)',
}


const ModalOverlay = ({ showModal, closeModal, children, contentLabel }) => (
  <Modal
    isOpen={showModal}
    onRequestClose={closeModal}
    style={modalStyle}
    backdropStyle={backdropStyle}
    contentLabel={contentLabel}
  >
    <ModalContent>
      {children}
    </ModalContent>
    <BackWrapper onClick={closeModal}>
      <div className="material-icons">navigate_before</div>
      Torna indietro
    </BackWrapper>
  </Modal>
)


const ModalContent = styled.div`
  margin: 0;
  background-color: white;
  position: relative;
  margin-top: 2rem;

  &:after {
    content: '';
  }
  @media (min-width: 500px) {
    margin: 1.25rem;
  }

`

const BackWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  letter-spacing: .1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: .5rem;
`

export default ModalOverlay