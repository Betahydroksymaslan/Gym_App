import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/organisms/Modal/Modal';
import { StyledForm, Text, Exit } from './AddNotes.style';
import TrainingsButton from 'components/atoms/TrainingsButton/TrainingsButton';
import { useDatabase } from 'store/DatabaseContext';
import { useAuth } from 'store/AuthContext';
import Loader from 'components/atoms/Loader/Loader';

const AddNotes = ({ close, data, day, training }) => {
  const input = useRef(null);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const handleOnChange = (e) => setValue(e.target.value);
  const { addNotes } = useDatabase();
  const { currentUser } = useAuth();
  const _isMounted = useRef(true);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      if (_isMounted.current) {
        setLoading(true);
        await addNotes(currentUser.uid, training, day, data, value);
        close();
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    return () => (_isMounted.current = false);
  }, []);

  useEffect(() => {
    if (input.current) input.current.focus();
  }, [input.current]);
  
  return (
    <Modal>
      <StyledForm onSubmit={handleOnSubmit}>
        <Exit onClick={close} />
        <Text ref={input} onChange={handleOnChange} value={value} />
        <TrainingsButton active small type="submit">
          dodaj
        </TrainingsButton>
      </StyledForm>
      {loading && <Loader />}
    </Modal>
  );
};

AddNotes.propTypes = {};

export default AddNotes;
