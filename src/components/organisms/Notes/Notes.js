import React from 'react';
import PropTypes from 'prop-types';
import Note from 'components/atoms/Note/Note';
import { useDatabase } from 'store/DatabaseContext';

const Notes = ({
  data,
  currentUser,
  deleteNotes,
  training,
  day,
  exerciseName,
}) => {
  const { updateNotes } = useDatabase();
  const removeNote = async (id) => {
    try {
      await deleteNotes(currentUser.uid, training, day, exerciseName, id);
    } catch (error) {
      console.log(error);
    }
  };
  const updateNote = async (id, body) => {
    try {
      await updateNotes(currentUser.uid, training, day, exerciseName, body, id);
    } catch (error) {
      console.log(error);
    }
  }
  const renderNotes = data?.map((item) => (
    <Note
      key={item.id}
      data={data}
      currentUser={currentUser}
      deleteNotes={deleteNotes}
      training={training}
      day={day}
      exerciseName={exerciseName}
      removeNote={removeNote}
      body={item.body}
      date={item.newDate}
      id={item.id}
      updateNote={updateNote}
    />
  ));
  return <>{data?.length > 0 ? renderNotes : null}</>;
};

Notes.propTypes = {};

export default Notes;
