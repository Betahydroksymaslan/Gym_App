import React, { useContext, useState } from 'react';

const AddTrainingContext = React.createContext();

export function useAddTrainingForm() {
  return useContext(AddTrainingContext);
}

export function AddTrainingFormProvider({ children }) {
  const [trainingName, setTrainingName] = useState('');
  const [daysNum, setDaysNum] = useState([]);
  const [daysName, setDaysName] = useState([]);
  

  const value = {
    trainingName,
    daysNum,
    setTrainingName,
    setDaysNum,
    setDaysName,
    daysName,
  };

  return (
    <AddTrainingContext.Provider value={value}>
      {children}
    </AddTrainingContext.Provider>
  );
}
