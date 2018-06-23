import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './fade.css';

const PageFade = props => (
  <CSSTransition
    {...props}
    classNames="fadeTranslate"
    key={props.location.pathname}
    timeout={500}
    mountOnEnter
    unmountOnExit
  />
);

export default PageFade;
