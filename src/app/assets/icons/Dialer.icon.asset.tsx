import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../styles/colors.style.asset';

import {iconProps} from './interface';

const DialerIcon: React.FC<iconProps> = ({
  width = 24,
  height = 24,
  fill = colors.gray0,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 5.00003C13.1046 5.00003 14 4.10459 14 3.00001C14 1.89544 13.1046 1 12 1C10.8954 1 9.99999 1.89544 9.99999 3.00001C9.99999 4.10459 10.8954 5.00003 12 5.00003Z"
      fill={fill}
      fillOpacity={1}
    />
    <Path
      d="M6.00001 5.00003C7.10459 5.00003 8.00002 4.10459 8.00002 3.00001C8.00002 1.89544 7.10459 1 6.00001 1C4.89544 1 4 1.89544 4 3.00001C4 4.10459 4.89544 5.00003 6.00001 5.00003Z"
      fill={fill}
      fillOpacity={1}
    />
    <Path
      d="M18 5.00003C19.1046 5.00003 20 4.10459 20 3.00001C20 1.89544 19.1046 1 18 1C16.8954 1 16 1.89544 16 3.00001C16 4.10459 16.8954 5.00003 18 5.00003Z"
      fill={fill}
      fillOpacity={1}
    />
    <Path
      d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 6.99999 12 6.99999C10.8954 6.99999 9.99999 7.89543 9.99999 9C9.99999 10.1046 10.8954 11 12 11Z"
      fill={fill}
      fillOpacity={1}
    />
    <Path
      d="M6.00001 11C7.10459 11 8.00002 10.1046 8.00002 9C8.00002 7.89543 7.10459 6.99999 6.00001 6.99999C4.89544 6.99999 4 7.89543 4 9C4 10.1046 4.89544 11 6.00001 11Z"
      fill={fill}
      fillOpacity={1}
    />
    <Path
      d="M18 11C19.1046 11 20 10.1046 20 9C20 7.89543 19.1046 6.99999 18 6.99999C16.8954 6.99999 16 7.89543 16 9C16 10.1046 16.8954 11 18 11Z"
      fill={fill}
      fillOpacity={1}
    />
    <Path
      d="M12 17C13.1046 17 14 16.1046 14 15C14 13.8954 13.1046 13 12 13C10.8954 13 9.99999 13.8954 9.99999 15C9.99999 16.1046 10.8954 17 12 17Z"
      fill={fill}
      fillOpacity={1}
    />
    <Path
      d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 9.99999 19.8954 9.99999 21C9.99999 22.1046 10.8954 23 12 23Z"
      fill={fill}
      fillOpacity={1}
    />
    <Path
      d="M6.00001 17C7.10459 17 8.00002 16.1046 8.00002 15C8.00002 13.8954 7.10459 13 6.00001 13C4.89544 13 4 13.8954 4 15C4 16.1046 4.89544 17 6.00001 17Z"
      fill={fill}
      fillOpacity={1}
    />
    <Path
      d="M18 17C19.1046 17 20 16.1046 20 15C20 13.8954 19.1046 13 18 13C16.8954 13 16 13.8954 16 15C16 16.1046 16.8954 17 18 17Z"
      fill={fill}
      fillOpacity={1}
    />
  </Svg>
);
export default DialerIcon;