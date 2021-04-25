import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from './Modal.style';

const Modal = ({ children }) => {
  return <ModalWrapper>{children}</ModalWrapper>;
};

Modal.propTypes = {};

export default Modal;
