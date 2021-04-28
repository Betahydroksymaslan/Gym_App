import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PageWrapper } from './DoTraining.style';
import { useParams } from 'react-router-dom';
import { useAuth } from 'store/AuthContext';
import { useDatabase } from 'store/DatabaseContext';

const DoTraining = (props) => {
  const { training, day } = useParams();
  const { currentUser } = useAuth();
  const { getTrainingDay } = useDatabase();
  const [trainingDay, setTrainingDay] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        await getTrainingDay(currentUser.uid, setTrainingDay, training, day);
      } catch (error) {
        console.log(error);
      }
    };

    getData();

    return () => getData;
  }, []);
  console.log(trainingDay);

  

  return <PageWrapper></PageWrapper>;
};

DoTraining.propTypes = {};

export default DoTraining;
