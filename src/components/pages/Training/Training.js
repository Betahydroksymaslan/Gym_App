import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  TrainingWrapper,
  DayWrapper,
  ExerciseWrapper,
  ButtonsWrapper,
  ExerciseName,
  RepsSpan,
  SeriesSpan,
} from './Training.style';
import { useParams } from 'react-router-dom';
import { useDatabase } from 'store/DatabaseContext';
import { useAuth } from 'store/AuthContext';
import Header from 'components/atoms/Heaader/Header';
import Button from 'components/atoms/Button/Button';
import AddExercise from 'components/organisms/AddExercise/AddExercise';
import Link from 'components/atoms/Link/Link';
import { DO_TRAINING } from 'constants/routes';

const Training = (props) => {
  const { id } = useParams();
  const { getTraining } = useDatabase();
  const { currentUser } = useAuth();
  const [training, setTraining] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalId = useRef(null);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);
  const postDataToModal = (id) => {
    modalId.current = id;
    openModal();
  };

  useEffect(() => {
    const getData = async () => {
      try {
        await getTraining(currentUser.uid, id, setTraining);
      } catch (error) {
        console.log(error);
      }
    };

    getData();

    return () => getData;
  }, []);

  const renderDays = training.map((item) => {
    return (
      <DayWrapper key={item.name}>
        <Header small>{item.name}</Header>
        <ExerciseWrapper>
          <ExerciseName template>Nazwa</ExerciseName>
          <SeriesSpan template>S</SeriesSpan>
          <RepsSpan template>P</RepsSpan>
        </ExerciseWrapper>
        {item.exercises &&
          item.exercises.map((item) => {
            return (
              <ExerciseWrapper key={item.exerciseName}>
                <ExerciseName>{item.exerciseName}</ExerciseName>
                <SeriesSpan>{item.series}</SeriesSpan>
                <RepsSpan>{`${item.repsFrom} - ${item.repsTo}`}</RepsSpan>
              </ExerciseWrapper>
            );
          })}
        <ButtonsWrapper>
          <Link width="none" to={`${DO_TRAINING}/${id}/${item.name}`}>
            <Button small active>
              ĆWICZ
            </Button>
          </Link>

          <Button small onClick={() => postDataToModal(item.name)}>
            + dodaj ćwiczenie
          </Button>
        </ButtonsWrapper>
      </DayWrapper>
    );
  });

  console.log(training);
  return (
    <TrainingWrapper>
      <Header>{id}</Header>
      {training.length > 0 && renderDays}
      {isModalOpen && (
        <AddExercise path={id} id={modalId.current} closeModal={closeModal} />
      )}
    </TrainingWrapper>
  );
};

Training.propTypes = {};

export default Training;
