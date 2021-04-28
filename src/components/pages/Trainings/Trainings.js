import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TrainingsWrapper } from './Trainings.style';
import TrainingsButton from 'components/atoms/TrainingsButton/TrainingsButton';
import AddTrainingForm from 'components/organisms/AddTrainingForm/AddTrainingForm';
import { useDatabase } from 'store/DatabaseContext';
import { useAuth } from 'store/AuthContext';
import Link from 'components/atoms/Link/Link';
import { TRAININGS } from 'constants/routes';

const Trainings = (props) => {
  const [trainings, setTrainings] = useState([]);
  const { getTrainings } = useDatabase();
  const { currentUser } = useAuth();
  const [isAddTrainingOpen, setIsAddTrainingOpen] = useState(false);

  const listOfTrainings = trainings.map((item) => (
    <Link to={`${TRAININGS}/${item.id}`} key={item.id}>
      <TrainingsButton>{item.id}</TrainingsButton>
    </Link>
  ));

  const openAddTrainingDialog = () => setIsAddTrainingOpen(true);
  const closeAddTrainingDialog = () => setIsAddTrainingOpen(false);

  useEffect(() => {
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
    <TrainingsWrapper>
      {trainings.length > 0 && listOfTrainings}
      <TrainingsButton onClick={openAddTrainingDialog}>
        + Dodaj trening
      </TrainingsButton>
      {isAddTrainingOpen && <AddTrainingForm />}
    </TrainingsWrapper>
  );
};

Trainings.propTypes = {};

export default Trainings;
