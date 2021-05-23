import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import {
  PageWrapper,
  HeaderWrapper,
  NextPrevArrow,
  HeaderName,
  ActualWeight,
  ButtonsWrapper,
  ChartAndWeightWrapper,
  LastBox,
  StyledLabel,
  IconWrapper,
  SeriesValue,
  AddNoteWrapper,
  AddNoteText,
  AddNoteIconWrapper,
} from './DoTraining.style';
import { useParams, useHistory } from 'react-router-dom';
import { useAuth } from 'store/AuthContext';
import { useDatabase } from 'store/DatabaseContext';
import Button from 'components/atoms/Button/Button';
import Diagram from 'components/molecules/Diagram/Diagram';
import UpdateResultByHand from 'components/organisms/UpdateWeightByHand/UpdateWeightByHand';
import ExerciseProgressBar from 'components/atoms/ExerciseProgressBar/ExerciseProgressBar';
import LastResults from 'components/molecules/LastResults/LastResults';
import WeightBox from 'components/molecules/WeightBox/WeightBox';
import { ReactComponent as SeriesIcon } from 'assets/icons/seriesIcon.svg';
import Notes from 'components/organisms/Notes/Notes';
import AddNotes from 'components/molecules/AddNotes/AddNotes';
import SuccessAnim from 'components/atoms/SuccessAnim/SuccessAnim';
import {ReactComponent as EditIcon} from 'assets/icons/editIcon.svg';

const DoTraining = (props) => {
  const _isMounted = useRef(true);
  const history = useHistory();
  const { training, day } = useParams();
  const { currentUser } = useAuth();
  const {
    getTrainingDay,
    updateByDefaultValu,
    updateByHand,
    updateRepsState,
    resetRepsState,
    updateBySameValue,
    makeFirstRepActive,
    deleteNotes,
  } = useDatabase();

  const [trainingDay, setTrainingDay] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState('0%');
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const lastElement = trainingDay.length - 1;
  let page = useRef(null);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const resetReps = async (number) => {
    await resetRepsState(
      currentUser.uid,
      training,
      day,
      trainingDay[index].exerciseName,
      number
    );
  };

  const updateByDefaultButton = async () => {
    try {
      successAnimation();
      await updateByDefaultValu(
        currentUser.uid,
        training,
        day,
        trainingDay[index].exerciseName,
        trainingDay[index].startWeight,
        trainingDay[index].basicProgression
      );
      trainingDay[index].repsData.map((item) => resetReps(item.number));
    } catch (error) {
      console.log(error);
    }
  };

  const updateBoxState = async (number, state) => {
    try {
      await updateRepsState(
        currentUser.uid,
        training,
        day,
        trainingDay[index].exerciseName,
        number,
        state,
        trainingDay[index].basicProgression,
        trainingDay[index].repsData,
        trainingDay[index].actualStatValue
      );
      successAnimation();
    } catch (error) {
      console.log(error);
    }
  };

  const goNextExercise = () => {
    if (index === lastElement) return;
    setIndex((prevState) => prevState + 1);
  };

  useEffect(() => {
    //document.addEventListener("touch")
  }, []);

  const goPreviousExercise = () => {
    if (index === 0) return;
    setIndex((prevState) => prevState - 1);
  };

  const updateNoChange = async () => {
    try {
      await updateBySameValue(
        currentUser.uid,
        training,
        day,
        trainingDay[index].exerciseName,
        trainingDay[index].actualStatValue
      );
      successAnimation();
    } catch (error) {
      console.log(error);
    }
  };

  const makeRepActive = async (repNumber) => {
    try {
      await makeFirstRepActive(
        currentUser.uid,
        training,
        day,
        trainingDay[index].exerciseName,
        repNumber
      );
    } catch (error) {
      console.log(error);
    }
  };

  const renderRepsBoxes = trainingDay[index]?.repsData.map((item, index) => {
    if (index === 0) makeRepActive(item.number);
    return (
      <Button
        key={item.number}
        active={item.state}
        onClick={() => updateBoxState(item.number, item.state)}
        squere
      >
        {item.number}
      </Button>
    );
  });

  const [isAnimationOn, setIsAnimationOn] = useState(false);

  const successAnimation = () => {
    setIsAnimationOn(true);
    const resetAnimation = () => setIsAnimationOn(false);
    setTimeout(resetAnimation, 1600);
  };

  const openAddNotes = () => setIsNotesOpen(true);
  const closeAddNotes = () => setIsNotesOpen(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(page, { duration: 0.5, autoAlpha: 0 }, { autoAlpha: 1 });
    return () => (_isMounted.current = false);
  }, [index]);

  useEffect(() => {
    const getData = async () => {
      try {
        if (_isMounted.current) {
          await getTrainingDay(currentUser.uid, setTrainingDay, training, day);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
    return () => getData();
  }, []);

  useEffect(() => {
    trainingDay.length &&
      setProgress(`${Math.round(((index + 1) / trainingDay.length) * 100)}%`);
  }, [index, trainingDay]);

  return (
    <PageWrapper ref={(el) => (page = el)}>
      <ExerciseProgressBar progress={progress} />
      <HeaderWrapper>
        <NextPrevArrow onClick={goPreviousExercise}></NextPrevArrow>
        <HeaderName>
          {trainingDay.length && trainingDay[index].exerciseName}
        </HeaderName>
        <NextPrevArrow onClick={goNextExercise} rotated></NextPrevArrow>
      </HeaderWrapper>
      <ActualWeight>
        {trainingDay.length && trainingDay[index].startWeight} kg
      </ActualWeight>
      <ChartAndWeightWrapper>
        <Diagram
          data={trainingDay[index]?.statsData}
          minValue={trainingDay[index]?.minValue}
          maxValue={trainingDay[index]?.maxValue}
        />
        <div>
          <WeightBox />
          <div>
            <StyledLabel>serie</StyledLabel>
            <LastBox>
              <IconWrapper>
                <SeriesIcon />
              </IconWrapper>
              <SeriesValue>{trainingDay[index]?.series}</SeriesValue>
            </LastBox>
          </div>
        </div>
      </ChartAndWeightWrapper>

      <LastResults data={trainingDay[index]?.lastResultsArray} />

      <Notes
        currentUser={currentUser}
        deleteNotes={deleteNotes}
        exerciseName={trainingDay[index]?.exerciseName}
        day={day}
        training={training}
        data={trainingDay[index]?.notesArr}
      />

      <AddNoteWrapper onClick={openAddNotes}>
        <AddNoteText>dodaj notatkę</AddNoteText>
        <AddNoteIconWrapper>
          <EditIcon />
        </AddNoteIconWrapper>
      </AddNoteWrapper>

      <ButtonsWrapper wider>{trainingDay && renderRepsBoxes}</ButtonsWrapper>
      <ButtonsWrapper>
        <Button squere green bold onClick={updateByDefaultButton}>
          +{trainingDay.length && trainingDay[index].basicProgression}
        </Button>
        <Button bold squere onClick={updateNoChange}>
          =
        </Button>
        <Button squere bold onClick={openModal}>
          +/-?
        </Button>
      </ButtonsWrapper>

      {isAnimationOn && <SuccessAnim state={isAnimationOn} />}

      <Button onClick={() => history.goBack()}>Wróć</Button>
      {isModalVisible && (
        <UpdateResultByHand
          currentUser={currentUser}
          day={day}
          training={training}
          exerciseName={trainingDay[index].exerciseName}
          startWeight={trainingDay[index].startWeight}
          actualStatValue={trainingDay[index].actualStatValue}
          updateByHand={updateByHand}
          close={closeModal}
          resetReps={resetReps}
          data={trainingDay}
          index={index}
          successAnimation={successAnimation}
        />
      )}
      {isNotesOpen && (
        <AddNotes
          training={training}
          day={day}
          data={trainingDay[index]?.exerciseName}
          close={closeAddNotes}
        />
      )}
    </PageWrapper>
  );
};

DoTraining.propTypes = {};

export default DoTraining;
