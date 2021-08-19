import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';

const Icon = ({ icon, ...props }) => (
  <FontAwesomeIcon icon={icons[icon] || brandIcons[icon]} {...props} />
);

export default memo(Icon);
