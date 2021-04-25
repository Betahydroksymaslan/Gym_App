import React from 'react';
import PropTypes from 'prop-types';
import Form from 'components/organisms/Form/Form';
import { useAddTrainingForm } from 'store/AddTrainingContext';
import Button from 'components/atoms/Button/Button';
import { ButtonsWrapper } from './TrainingStepThree.style';
import Label from 'components/atoms/Label/Label';
import Input from 'components/atoms/Input/Input';
import { useDatabase } from 'store/databaseContext';
import { useAuth } from 'store/AuthContext';

const TrainingStepThree = ({ step, previousStep }) => {
  const { daysNum, trainingName } = useAddTrainingForm();
  const { addTraining } = useDatabase();
  const { currentUser } = useAuth();

  const exercises = daysNum.map((item) => (
    <Input
      key={item}
      line
      name={`days[${item - 1}]`}
      placeholder={`nazwij dzień nr ${item}`}
    />
  ));

  const handleSubmit = async (data) => {
    console.log(data);
    

    try {
      await addTraining(currentUser, trainingName, data.days);
    } catch (error) {
      console.log(error);
    }
  };

  if (step !== 3) return null;

  return (
    <Form height="70%" onSubmit={handleSubmit}>
      <Label marginTop="150px" marginBottom="20px">
        Nazwij poszczególne treningi
      </Label>
      {daysNum && exercises}
      <ButtonsWrapper>
        <Button onClick={previousStep}>Wróć</Button>
        <Button type="submit" active>
          Wyślij
        </Button>
      </ButtonsWrapper>
    </Form>
  );
};

TrainingStepThree.propTypes = {};

export default TrainingStepThree;
