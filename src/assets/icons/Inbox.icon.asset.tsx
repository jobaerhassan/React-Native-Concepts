import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../styles/colors.style.asset';
import {iconProps} from './interface';

const InboxIcon: React.FC<iconProps> = ({
  width = 24,
  height = 24,
  fill = colors.white,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.13649 4.13649C3.36481 4.90818 2.9001 6.13883 2.9001 8.0001V13.0001C2.9001 15.4225 3.3925 16.5851 4.09275 17.1978C4.82273 17.8365 6.01601 18.1001 8.0001 18.1001H8.5001C8.81248 18.1001 9.11065 18.197 9.34108 18.3112C9.56823 18.4238 9.83163 18.6039 10.0231 18.8641L11.5201 20.8601C11.7051 21.1068 11.8876 21.1601 12.0001 21.1601C12.1126 21.1601 12.2951 21.1068 12.4801 20.8601L13.9801 18.8601L13.9836 18.8555C14.3412 18.385 14.9046 18.1001 15.5001 18.1001H16.0001C17.8614 18.1001 19.092 17.6354 19.8637 16.8637C20.6354 16.092 21.1001 14.8614 21.1001 13.0001V8.0001C21.1001 6.13883 20.6354 4.90818 19.8637 4.13649C19.092 3.36481 17.8614 2.9001 16.0001 2.9001H8.0001C6.13883 2.9001 4.90818 3.36481 4.13649 4.13649ZM2.8637 2.8637C4.09201 1.63539 5.86137 1.1001 8.0001 1.1001H16.0001C18.1388 1.1001 19.9082 1.63539 21.1365 2.8637C22.3648 4.09201 22.9001 5.86137 22.9001 8.0001V13.0001C22.9001 15.1388 22.3648 16.9082 21.1365 18.1365C19.9082 19.3648 18.1388 19.9001 16.0001 19.9001H15.5001C15.4759 19.9001 15.44 19.9148 15.4175 19.9435L15.4166 19.9447L13.9201 21.9401C13.4451 22.5734 12.7576 22.9601 12.0001 22.9601C11.2426 22.9601 10.5551 22.5734 10.0801 21.9401L8.58932 19.9524C8.57937 19.9451 8.56308 19.9346 8.54162 19.924C8.51765 19.9121 8.49617 19.9044 8.48169 19.9005L8.48022 19.9001H8.0001C5.98418 19.9001 4.17746 19.6637 2.90744 18.5524C1.6077 17.4151 1.1001 15.5777 1.1001 13.0001V8.0001C1.1001 5.86137 1.63539 4.09201 2.8637 2.8637Z"
      fill={fill}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.1001 8.0001C6.1001 7.50304 6.50304 7.1001 7.0001 7.1001H17.0001C17.4972 7.1001 17.9001 7.50304 17.9001 8.0001C17.9001 8.49715 17.4972 8.9001 17.0001 8.9001H7.0001C6.50304 8.9001 6.1001 8.49715 6.1001 8.0001ZM6.1001 13.0001C6.1001 12.503 6.50304 12.1001 7.0001 12.1001H13.0001C13.4972 12.1001 13.9001 12.503 13.9001 13.0001C13.9001 13.4972 13.4972 13.9001 13.0001 13.9001H7.0001C6.50304 13.9001 6.1001 13.4972 6.1001 13.0001Z"
      fill={fill}
    />
  </Svg>
);
export default InboxIcon;