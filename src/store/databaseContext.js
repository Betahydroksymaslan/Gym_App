import React, { useContext, useCallback } from 'react';
import { db } from 'assets/firebase/firebase';

const DatabaseContext = React.createContext();

export function useDatabase() {
  return useContext(DatabaseContext);
}

export function DatabaseProvider({ children }) {
  const addTraining = (currentUser, trainingName, days = []) => {
    days.map((item) => {
      const trainingRef = db.ref(
        `users/${currentUser.uid}/trainings/${trainingName}/${item}`
      );

      trainingRef.update({
        name: item,
      });
    });
  };

  const getTrainings = (currentUser, setData) => {
    const ref = db.ref(`/users/${currentUser}/trainings/`);

    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      const temporaryData = [];
      for (let id in value) {
        temporaryData.push({ id, ...value[id] });
      }
      setData(temporaryData);
    });
  };

  const getTraining = (currentUser, id, setData) => {
    const ref = db.ref(`/users/${currentUser}/trainings/${id}`);

    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      const temporaryData = [];
      let exercises = [];

      for (let id in value) {
        for (let i in value[id].exercises) {
          exercises.push({ ...value[id].exercises[i] });
        }
        exercises.sort((a, b) => a.order - b.order);
        temporaryData.push({ ...value[id], exercises });
        exercises = [];
      }

      setData(temporaryData);
    });
  };

  const getTrainingDay = (currentUser, setData, training, day) => {
    const ref = db.ref(`/users/${currentUser}/trainings/${training}/${day}`);

    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      const temporaryData = [];

      let exercisesData = [];
      let repsData = [];
      let statsData = [];
      for (let id in value.exercises) {
        for (let i in value.exercises[id].reps) {
          repsData.push({ ...value.exercises[id].reps[i] });
        }
        for (let i in value.exercises[id].chartStats) {
          statsData.push({ ...value.exercises[id].chartStats[i] });
        }
        statsData.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA - dateB;
        });
        const sortedData = [...statsData];
        sortedData?.sort((a,b) => a.weight - b.weight)
        const minValue = sortedData[0]?.weight - 1;
        const maxValue = sortedData?.splice(-1,1)[0]?.weight + 1;

        const lastResultsData = [...statsData];
        lastResultsData?.reverse();
        const lastResultsArray = lastResultsData?.splice(0,10).reverse();
        
        exercisesData.push({ ...value.exercises[id], repsData, statsData, minValue, maxValue, lastResultsArray });
        exercisesData.sort((a, b) => a.order - b.order);
        repsData = [];
        statsData = [];
      }

      temporaryData.push(...exercisesData);
      setData(temporaryData);
    });
  };

  const addExercise = (currentUser, path, id, exercise, data, reps = []) => {
    const ref = db.ref(
      `/users/${currentUser}/trainings/${path}/${id}/exercises/${exercise}`
    );

    ref.update(data);

    const repsRef = db.ref(
      `/users/${currentUser}/trainings/${path}/${id}/exercises/${exercise}/reps`
    );

    reps.map((item) => {
      repsRef.update({
        [item]: {
          state: false,
          number: item,
        },
      });
    });
  };

  const makeFirstRepActive = (
    currentUser,
    training,
    day,
    exercise,
    repNumber
  ) => {
    const ref = db.ref(
      `/users/${currentUser}/trainings/${training}/${day}/exercises/${exercise}/reps/${repNumber}`
    );

    ref.update({
      state: true,
    });
  };

  const updateByDefaultValu = (
    currentUser,
    training,
    day,
    exercise,
    startWeight,
    defaultValue
  ) => {
    const date = new Date().toString().slice(4, 21);

    const ref = db.ref(
      `/users/${currentUser}/trainings/${training}/${day}/exercises/${exercise}`
    );

    ref.update({
      startWeight: startWeight + Number.parseFloat(defaultValue),
      actualStatValue: startWeight + defaultValue,
    });

    const resultsRef = db.ref(
      `/users/${currentUser}/trainings/${training}/${day}/exercises/${exercise}/chartStats/${date}`
    );

    resultsRef.update({
      date: date,
      weight: startWeight + defaultValue,
      progress: 'progress',
    });
  };

  const updateByHand = (
    currentUser,
    training,
    day,
    exercise,
    startWeight,
    settedValue,
    markValue,
    actualStatValue
  ) => {
    const date = new Date().toString().slice(4, 21);
    const ref = db.ref(
      `/users/${currentUser}/trainings/${training}/${day}/exercises/${exercise}`
    );

    const resultsRef = db.ref(
      `/users/${currentUser}/trainings/${training}/${day}/exercises/${exercise}/chartStats/${date}`
    );

    if (markValue) {
      ref.update({
        startWeight: startWeight + Number.parseFloat(settedValue),
        actualStatValue: startWeight + Number.parseFloat(settedValue),
      });

      resultsRef.update({
        date: date,
        weight: actualStatValue + Number.parseFloat(settedValue),
        progress: 'progress',
      });
    }
    if (!markValue) {
      ref.update({
        startWeight: startWeight - Number.parseFloat(settedValue),
        actualStatValue: startWeight - Number.parseFloat(settedValue),
      });

      resultsRef.update({
        date: date,
        weight: actualStatValue - Number.parseFloat(settedValue),
        progress: 'regress',
      });
    }
  };

  const updateBySameValue = (
    currentUser,
    training,
    day,
    exercise,
    actualStatValue
  ) => {
    const date = new Date().toString().slice(4, 21);
    const resultsRef = db.ref(
      `/users/${currentUser}/trainings/${training}/${day}/exercises/${exercise}/chartStats/${date}`
    );

    resultsRef.update({
      date: date,
      weight: actualStatValue,
      progress: 'equal',
    });
  };

  const updateRepsState = (
    currentUser,
    training,
    day,
    exercise,
    number,
    state,
    defaultValue,
    reps = [],
    actualStatValue
  ) => {
    const date = new Date().toString().slice(4, 21);

    const ref = db.ref(
      `/users/${currentUser}/trainings/${training}/${day}/exercises/${exercise}/reps/${number}`
    );

    const unit = Number.parseFloat(
      (defaultValue / (reps.length - 1)).toFixed(1)
    );

    const resultsRef = db.ref(
      `/users/${currentUser}/trainings/${training}/${day}/exercises/${exercise}/chartStats/${date}`
    );
    const userRef = db.ref(
      `/users/${currentUser}/trainings/${training}/${day}/exercises/${exercise}`
    );

    if (!state) {
      resultsRef.update({
        date: date,
        weight: actualStatValue + unit,
        progress: 'progress',
      });

      userRef.update({
        actualStatValue: actualStatValue + unit,
      });
    }

    ref.update({
      state: !state,
    });
  };

  const resetRepsState = (currentUser, training, day, exercise, number) => {
    const ref = db.ref(
      `/users/${currentUser}/trainings/${training}/${day}/exercises/${exercise}/reps/${number}`
    );

    ref.update({
      state: false,
    });
  };

  const value = {
    addTraining,
    getTrainings,
    getTraining,
    addExercise,
    getTrainingDay,
    updateByDefaultValu,
    updateByHand,
    updateRepsState,
    resetRepsState,
    updateBySameValue,
    makeFirstRepActive,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}
