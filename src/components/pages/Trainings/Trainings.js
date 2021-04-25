import React from 'react';
import PropTypes from 'prop-types';
import {TrainingsWrapper} from './Trainings.style';
import TrainingsButton from 'components/atoms/TrainingsButton/TrainingsButton';
import AddTrainingForm from 'components/organisms/AddTrainingForm/AddTrainingForm';

const Trainings = props => {
    return (
        <TrainingsWrapper>
           <TrainingsButton>+ Dodaj trening</TrainingsButton>
           <AddTrainingForm />
        </TrainingsWrapper>
    );
};

Trainings.propTypes = {
    
};

export default Trainings;