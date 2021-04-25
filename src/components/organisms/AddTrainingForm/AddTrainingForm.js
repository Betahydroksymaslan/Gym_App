import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormWrapper, ButtonsWrapper } from './AddTrainingForm.style';
import Button from 'components/atoms/Button/Button';
import ProgressBar from 'components/atoms/ProgressBar/ProgressBar';
import TrainingStepFirst from 'components/organisms/TrainingStepFirst/TrainingStepFirst';
import TrainingStepTwoo from 'components/organisms/TrainingStepTwoo/TrainingStepTwoo';
import TrainingStepThree from 'components/organisms/TrainingStepThree/TrainingStepThree';
import { AddTrainingFormProvider } from 'store/AddTrainingContext';

const AddTrainingForm = (props) => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 3) setStep((prevState) => prevState + 1);
  };

  const handlePreviousStep = () => {
    if (step === 1) return;
    setStep((prevState) => prevState + -1);
  };

const addTraining = (currentUser, db) => {
  
}

  return (
    <FormWrapper>
      <ProgressBar step={step} />
      <AddTrainingFormProvider>
        <TrainingStepFirst step={step} nextStep={handleNextStep} />
        <TrainingStepTwoo step={step} nextStep={handleNextStep} previousStep={handlePreviousStep} />
        <TrainingStepThree step={step} previousStep={handlePreviousStep} />
      </AddTrainingFormProvider>
      
    </FormWrapper>
  );
};

AddTrainingForm.propTypes = {};

export default AddTrainingForm;
