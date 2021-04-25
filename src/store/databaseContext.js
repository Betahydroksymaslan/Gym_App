import React, { useContext } from 'react';
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

  const value = {
    addTraining,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}
