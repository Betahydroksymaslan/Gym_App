import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ComponentWrapper,
  TopBar,
  IconWrapper,
  IconsWrapper,
  BoxLabel,
  NotesWrapper,
  StyledTextarea,
  AgreeChangeIcon,
} from './Note.style';
import { ReactComponent as EditIcon } from 'assets/icons/editIcon.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/deleteIcon.svg';
import gsap from 'gsap';

const Note = ({ body, date, removeNote, id, updateNote }) => {
  let note = useRef(null);
  let textarea = useRef(null);

  const [isEdited, setIsEdited] = useState(false);
  const [bodyValue, setBodyValue] = useState(body);

  const startEditing = () => setIsEdited(true);

  const endEditing = () => setIsEdited(false);

  const handleOnChange = (e) => setBodyValue(e.target.value);

  const update = () => {
    updateNote(id, bodyValue);
    endEditing();
  };

  useEffect(() => {
    if (!textarea.current) return;
    textarea.current.focus();
  }, [isEdited]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(note, { autoAlpha: 0, duration: 0.3 }, { autoAlpha: 1 });
  }, []);

  return (
    <ComponentWrapper ref={(el) => (note = el)}>
      <TopBar>
        <BoxLabel>{date}</BoxLabel>
        <IconsWrapper>
          {isEdited ? (
            <AgreeChangeIcon onClick={update} />
          ) : (
            <IconsWrapper>
              <IconWrapper onClick={startEditing}>
                <EditIcon />
              </IconWrapper>
              <IconWrapper onClick={() => removeNote(id)}>
                <DeleteIcon />
              </IconWrapper>
            </IconsWrapper>
          )}
        </IconsWrapper>
      </TopBar>

      <NotesWrapper>
        {isEdited ? (
          <StyledTextarea
            ref={textarea}
            value={bodyValue}
            onChange={handleOnChange}
          />
        ) : (
          <BoxLabel big>{body}</BoxLabel>
        )}
      </NotesWrapper>
    </ComponentWrapper>
  );
};

Note.propTypes = {};

export default Note;
