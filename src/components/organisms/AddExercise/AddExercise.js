import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Form from 'components/organisms/Form/Form';
import Modal from 'components/organisms/Modal/Modal';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Select from 'components/atoms/Select/Select';
import Label from 'components/atoms/Label/Label';
import { ButtonsWrapper } from './AddExercise.style';
import { useAuth } from 'store/AuthContext';
import { useDatabase } from 'store/DatabaseContext';
import Loader from 'components/atoms/Loader/Loader';

const AddExercise = ({ closeModal, id, path }) => {
  const { currentUser } = useAuth();
  const { addExercise } = useDatabase();
  const [loading, setLoading] = useState(false);
  const _isMounted = useRef(true);

  const handleSubmit = async (data) => {
    const exerciseData = {
      exerciseName: data.name,
      series: Number.parseInt(data.series),
      basicProgression: Number.parseFloat(data.progression),
      startWeight: Number.parseFloat(data.startWeight),
      actualStatValue: Number.parseFloat(data.startWeight),
      progressionType: data.typeOfProgression,
      order: data.order,
      repsFrom: Number.parseInt(data.repsFrom),
      repsTo: Number.parseInt(data.repsTo),
    };
    console.log(data);

    let numberFrom = Number.parseInt(data.repsFrom);
    const numberTo = Number.parseInt(data.repsTo);
    const repsArray = [];
    for (numberFrom; numberFrom <= numberTo; numberFrom++) {
      repsArray.push(numberFrom);
    }

    try {
      if (_isMounted.current) {
        await addExercise(currentUser.uid, path, id, data.name, exerciseData, repsArray, exerciseData.startWeight);
        setLoading(true);
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    return () => (_isMounted.current = false);
  }, []);

  return (
    <>
      <Modal>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name" marginTop="30px" small>
            Nazwij ??wiczenie
          </Label>
          <Input type="text" id="name" small name="name" />
          <Label marginTop="20px" htmlFor="series" small>
            Podaj ilo???? serii
          </Label>
          <Input type="number" id="series" small name="series" />

          <Label marginTop="20px" htmlFor="reps" small>
            Podaj ilo???? powt??rze??
          </Label>
          <Input
            type="number"
            placeholder="od"
            id="reps"
            small
            name="repsFrom"
          />
          <Input
            type="number"
            placeholder="do"
            id="repsTo"
            small
            name="repsTo"
          />

          <Label marginTop="20px" htmlFor="progression" small>
            Domy??lna progresja w kg
          </Label>
          <Input
            type="number"
            step="0.1"
            id="progression"
            small
            name="progression"
          />
          <Label marginTop="20px" htmlFor="startWeight" small>
            Ci????ar / powt??rzenia startowe
          </Label>
          <Input
            type="number"
            step="0.1"
            id="startWeight"
            small
            name="startWeight"
          />
          <Label marginTop="20px" small>
            Wybierz spos??b progresji
          </Label>
          <Select
            name="typeOfProgression"
            options={['ci????ar', 'powt??rzenia']}
          />
          <Label marginTop="20px" htmlFor="order" small>
            Kolejno???? w planie
          </Label>
          <Input type="number" id="order" small name="order" />
          <ButtonsWrapper>
            <Button onClick={closeModal}>wr????</Button>
            <Button type="submit">dodaj</Button>
          </ButtonsWrapper>
        </Form>
      </Modal>
      {loading && <Loader />}
    </>
  );
};

AddExercise.propTypes = {};

export default AddExercise;
