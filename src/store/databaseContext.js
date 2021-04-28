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
      for (let id in value.exercises) {
        
        for (let i in value.exercises[id].reps) {
          repsData.push({...value.exercises[id].reps[i]})
        }
        exercisesData.push({...value.exercises[id], repsData})
        exercisesData.sort((a, b) => a.order - b.order);
        repsData = [];
      }
      
      temporaryData.push(...exercisesData);
      setData(temporaryData);
    });
  }

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
        [item] : {
          state: false,
          number: item,
        }
      });
    });
  };

  const value = {
    addTraining,
    getTrainings,
    getTraining,
    addExercise,
    getTrainingDay,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}
