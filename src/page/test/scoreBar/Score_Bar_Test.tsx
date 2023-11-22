import React, { useEffect, useState } from 'react';
import {
  ScoreBarTestCSS,
  ScoreBarTestContainerCSS,
  ScrollBarTestEquireCSS,
} from './styled/ScoreBarTestStyled';

const ScoreBarTest = () => {
  const score = 1.0;
  const [equire, setEquire] = useState(0.0);

  useEffect(() => {
    equireSetting();
  }, [equire]);
  const equireSetting = () => {
    let hundred = (score / 5.0) * 100;
    if (hundred < 10) {
      hundred = 0;
    }
    setEquire(hundred);
  };

  return (
    <ScoreBarTestContainerCSS>
      <ScoreBarTestCSS>
        <ScrollBarTestEquireCSS style={{ height: `${equire}%` }} />
      </ScoreBarTestCSS>
    </ScoreBarTestContainerCSS>
  );
};

export default ScoreBarTest;
