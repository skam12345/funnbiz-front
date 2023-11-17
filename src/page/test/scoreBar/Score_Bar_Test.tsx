import React from 'react';
import {
  ScoreBarTestCSS,
  ScoreBarTestContainerCSS,
} from './styled/ScoreBarTestStyled';

const ScoreBarTest = () => {
  return (
    <ScoreBarTestContainerCSS>
      <ScoreBarTestCSS></ScoreBarTestCSS>
    </ScoreBarTestContainerCSS>
  );
};

export default ScoreBarTest;
