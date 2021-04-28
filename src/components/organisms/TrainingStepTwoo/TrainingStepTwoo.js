import React from 'react';
import PropTypes from 'prop-types';
import Form from 'components/organisms/Form/Form';
import Label from 'components/atoms/Label/Label';
import RadioButton from 'components/atoms/RadioButton/RadioButton';
import { RadioWrapper, ButtonsWrapper } from './TrainingStepTwoo.style';
import Button from 'components/atoms/Button/Button';
import { useAddTrainingForm } from 'store/AddTrainingContext';

const TrainingStepTwoo = ({ step, nextStep, previousStep }) => {
  const { setDaysNum, daysNum } = useAddTrainingForm();

  if (step !== 2) return null;

  const handleOnSubmit = (data) => {
    const number = Number.parseInt(data.days);
    const temporaryArray = [];
    for (let i = 0; i < number; i++) {
      temporaryArray.push(i + 1);
    }
    setDaysNum(temporaryArray);
    nextStep();
  };
  console.log(daysNum);
  return (
    <Form onSubmit={handleOnSubmit} row height="70%">
      <Label>Wybierz ilość treningów w tygodniu</Label>
    
      <RadioButton name="days" value={1} day="1" />
      <RadioButton name="days" value={2} day="2" />
      <RadioButton name="days" value={3} day="3" />
      <RadioButton name="days" value={4} day="4" />
      <RadioButton name="days" value={5} day="5" />
      <RadioButton name="days" value={6} day="6" />
      <RadioButton name="days" value={7} day="7" />

      <ButtonsWrapper>
        <Button onClick={previousStep}>Wróć</Button>
        <Button type="submit">Dalej</Button>
      </ButtonsWrapper>
    </Form>
  );
};

TrainingStepTwoo.propTypes = {};

export default TrainingStepTwoo;
