import React from 'react';
import PropTypes from 'prop-types';
import Form from 'components/organisms/Form/Form';
import Label from 'components/atoms/Label/Label';
import Input from 'components/atoms/Input/Input';
import { useAddTrainingForm } from 'store/AddTrainingContext';
import Button from 'components/atoms/Button/Button';
import {ButtonsWrapper} from './TrainingStepFirst.style';

const TrainingStepFirst = ({ step, nextStep }) => {
  const { setTrainingName } = useAddTrainingForm();

  if (step !== 1) return null;

  const handleOnSubmit = (data) => {
    setTrainingName(data.trainingName);
    nextStep()
  };

  return (
    <Form onSubmit={handleOnSubmit} height="80%" >
      <Label marginBottom="50px">Nazwij swój trening</Label>
      <Input line type="text" name="trainingName" />
      <ButtonsWrapper>
        <Button type="submit">Dalej</Button>
      </ButtonsWrapper>
    </Form>
  );
};

TrainingStepFirst.propTypes = {};

export default TrainingStepFirst;
