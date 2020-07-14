import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

const Icon = ({ icon }) => <FontAwesomeIcon icon={icons[icon]} />;

export default memo(Icon);
