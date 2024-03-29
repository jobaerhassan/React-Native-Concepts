import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../styles/colors.style.asset';
import {iconProps} from './interface';

const BackSpaceIcon: React.FC<iconProps> = ({
  width = 24,
  height = 24,
  fill = colors.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.8396 4.718C6.98021 3.45794 8.58969 2.75 10.2802 2.75H17.0002C20.3124 2.75 23.0002 5.43772 23.0002 8.75V15.25C23.0002 18.5623 20.3124 21.25 17.0002 21.25H10.2802C8.58966 21.25 6.98016 20.542 5.83955 19.2819L5.83862 19.2809L2.31047 15.403C0.553439 13.4715 0.553396 10.5286 2.31043 8.59709L5.83862 4.71909L5.8396 4.718ZM10.2802 4.75C9.1511 4.75 8.08102 5.22165 7.32169 6.06091L7.31984 6.06296L3.78988 9.94291C2.72697 11.1114 2.72693 12.8885 3.78984 14.057L7.32169 17.9391C8.08102 18.7783 9.1511 19.25 10.2802 19.25H17.0002C19.2079 19.25 21.0002 17.4577 21.0002 15.25V8.75C21.0002 6.54228 19.2079 4.75 17.0002 4.75H10.2802Z"
      fill={fill}
      fillOpacity={1}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.353 8.82289C10.7436 8.43237 11.3767 8.43237 11.7673 8.82289L16.7073 13.7629C17.0978 14.1534 17.0978 14.7866 16.7073 15.1771C16.3167 15.5676 15.6836 15.5676 15.293 15.1771L10.353 10.2371C9.96252 9.84658 9.96252 9.21342 10.353 8.82289Z"
      fill={fill}
      fillOpacity={1}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.7073 8.82289C17.0978 9.21342 17.0978 9.84658 16.7073 10.2371L11.7673 15.1771C11.3767 15.5676 10.7436 15.5676 10.353 15.1771C9.96252 14.7866 9.96252 14.1534 10.353 13.7629L15.293 8.82289C15.6836 8.43237 16.3167 8.43237 16.7073 8.82289Z"
      fill={fill}
      fillOpacity={1}
    />
  </Svg>
);
export default BackSpaceIcon;
