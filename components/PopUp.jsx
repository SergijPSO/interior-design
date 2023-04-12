import React from 'react';
import Modal from 'react-modal';
import Gallery from './Gallery';

Modal.setAppElement('#__next');

function PopUp(props) {

  const { isOpen, onClose, children } = props;
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      {children}
        <Gallery/>
      </Modal>
  );
}

export default PopUp;