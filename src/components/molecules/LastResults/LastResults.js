import React from 'react';
import PropTypes from 'prop-types';
import {
  LastResultsBox,
  IconWrapper,
  StyledLabel,
  TemplateWrapper,
} from './LastResults.style';
import { ReactComponent as CheckYesIcon } from 'assets/icons/checkYesIcon.svg';
import { ReactComponent as CheckNoIcon } from 'assets/icons/checkNoIcon.svg';
import { ReactComponent as CheckEqualIcon } from 'assets/icons/checkEqualIcon.svg';

const LastResults = ({ data }) => {
  const renderResults = data?.map((item) => {
    const { progress } = item;

    const components = {
      progress: CheckYesIcon,
      regress: CheckNoIcon,
      equal: CheckEqualIcon,
    };

    const Component = components[progress];

    return (
      <IconWrapper key={item.date}>
        <Component />
      </IconWrapper>
    );
  });
  return (
    <TemplateWrapper>
      <div>
        <StyledLabel>ostatnie wyniki</StyledLabel>
        <LastResultsBox>{data?.length ? renderResults : null}</LastResultsBox>
      </div>
    </TemplateWrapper>
  );
};

LastResults.propTypes = {};

export default LastResults;
