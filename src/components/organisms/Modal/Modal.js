import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper, ModalBackdrop } from './Modal.style';

const Modal = ({ children, ...rest }) => {
  return (
    <ModalBackdrop {...rest}>
      <ModalWrapper>{children}</ModalWrapper>
    </ModalBackdrop>
  );
};

Modal.propTypes = {};

export default Modal;
