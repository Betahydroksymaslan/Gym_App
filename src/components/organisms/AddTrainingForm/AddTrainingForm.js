import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormWrapper } from './AddTrainingForm.style';
import ProgressBar from 'components/atoms/ProgressBar/ProgressBar';
import TrainingStepFirst from 'components/organisms/TrainingStepFirst/TrainingStepFirst';
import TrainingStepTwoo from 'components/organisms/TrainingStepTwoo/TrainingStepTwoo';
import TrainingStepThree from 'components/organisms/TrainingStepThree/TrainingStepThree';
import { AddTrainingFormProvider } from 'store/AddTrainingContext';
import { Escape } from 'components/organisms/UpdateWeightByHand/UpdateWeightByHand.style';

const AddTrainingForm = ({ closeModal }) => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 3) setStep((prevState) => prevState + 1);
  };

  const handlePreviousStep = () => {
    if (step === 1) return;
    setStep((prevState) => prevState + -1);
  };

  return (
    <FormWrapper>
      <ProgressBar step={step} />
      <Escape onClick={closeModal} />
      <AddTrainingFormProvider>
        <TrainingStepFirst step={step} nextStep={handleNextStep} />
        <TrainingStepTwoo
          step={step}
          nextStep={handleNextStep}
          previousStep={handlePreviousStep}
        />
        <TrainingStepThree step={step} previousStep={handlePreviousStep} />
      </AddTrainingFormProvider>
    </FormWrapper>
  );
};

AddTrainingForm.propTypes = {};

export default AddTrainingForm;
