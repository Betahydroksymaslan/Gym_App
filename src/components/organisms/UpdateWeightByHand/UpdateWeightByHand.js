import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/organisms/Modal/Modal';
import {
  Wrapper,
  ButtonsWrapper,
  Value,
  Plus,
  Minus,
  Escape,
} from './UpdateWeightByHand.style';
import Button from 'components/atoms/Button/Button';
import gsap from 'gsap';

const UpdateWeightByHand = ({
  close,
  day,
  exerciseName,
  startWeight,
  currentUser,
  updateByHand,
  training,
  resetReps,
  data,
  index,
  actualStatValue,
  successAnimation,
}) => {
  let modal = useRef(null);
  const [isPlus, setIsPlus] = useState(true);
  const [number, setNumber] = useState(0);
  const _isMounted = useRef(true);
  const changeMark = () => setIsPlus((prevState) => !prevState);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      if (_isMounted.current) {
        successAnimation();
        await updateByHand(
          currentUser.uid,
          training,
          day,
          exerciseName,
          startWeight,
          number,
          isPlus,
          actualStatValue
        );
        number !== 0 &&
          data[index]?.repsData.map((item) => resetReps(item.number));
        close();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (e) => setNumber(e.target.value);

  useEffect(() => {
    return () => (_isMounted.current = false);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(modal, { duration: 0.2, autoAlpha: 0 }, { autoAlpha: 1 });
  }, []);

  return (
    <Modal>
      <Wrapper onSubmit={handleOnSubmit} ref={(el) => (modal = el)}>
        <ButtonsWrapper>
          <Button
            type="button"
            squere
            dark
            onClick={changeMark}
            active={isPlus}
          >
            <Plus />
          </Button>
          <Button
            type="button"
            squere
            dark
            onClick={changeMark}
            active={!isPlus}
          >
            <Minus />
          </Button>
        </ButtonsWrapper>
        <Value
          type="number"
          value={number}
          onChange={handleOnChange}
          step="0.1"
        />
        <Button type="submit" active>
          zmień
        </Button>
        <Escape onClick={close} />
      </Wrapper>
    </Modal>
  );
};

UpdateWeightByHand.propTypes = {};

export default UpdateWeightByHand;
