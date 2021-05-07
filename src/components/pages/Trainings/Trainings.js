import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { TrainingsWrapper } from './Trainings.style';
import TrainingsButton from 'components/atoms/TrainingsButton/TrainingsButton';
import AddTrainingForm from 'components/organisms/AddTrainingForm/AddTrainingForm';
import { useDatabase } from 'store/DatabaseContext';
import { useAuth } from 'store/AuthContext';
import Link from 'components/atoms/Link/Link';
import { TRAININGS } from 'constants/routes';
import { useHistory } from 'react-router-dom';
import gsap from 'gsap';
import Loader from 'components/atoms/Loader/Loader';

const Trainings = (props) => {
  const [trainings, setTrainings] = useState([]);
  const { getTrainings } = useDatabase();
  const { currentUser } = useAuth();
  const [isAddTrainingOpen, setIsAddTrainingOpen] = useState(false);
  const history = useHistory();
  let page = useRef(null);

  const listOfTrainings = trainings.map((item) => (
    <Link to={`${TRAININGS}/${item.id}`} key={item.id}>
      <TrainingsButton>{item.id}</TrainingsButton>
    </Link>
  ));

  const openAddTrainingDialog = () => setIsAddTrainingOpen(true);
  const closeAddTrainingDialog = () => setIsAddTrainingOpen(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(page, { duration: 0.3, autoAlpha: 0 }, { autoAlpha: 1 });
    const getData = async () => {
      try {
        await getTrainings(currentUser.uid, setTrainings);
      } catch (error) {
        console.log(error);
      }
    };
    getData();

    return () => getData;
  }, []);

  return (
    <TrainingsWrapper ref={(el) => (page = el)}>
      {trainings.length > 0 && listOfTrainings}
      <TrainingsButton onClick={openAddTrainingDialog}>
        + Dodaj trening
      </TrainingsButton>
      <TrainingsButton onClick={() => history.goBack()}>Wróć</TrainingsButton>
      {isAddTrainingOpen && (
        <AddTrainingForm closeModal={closeAddTrainingDialog} />
      )}
      {trainings.length ? null : <Loader />}
    </TrainingsWrapper>
  );
};

Trainings.propTypes = {};

export default Trainings;
