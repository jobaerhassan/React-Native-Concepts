import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../styles/colors.style.asset';
import {iconProps} from './interface';

const EditIcon: React.FC<iconProps> = ({
  width = 24,
  height = 24,
  fill = colors.gray0,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.1 22a.9.9 0 01.9-.9h18a.9.9 0 010 1.8H3a.9.9 0 01-.9-.9zM15.133 2.116c1.173-.116 2.319.403 3.434 1.519 1.116 1.116 1.635 2.261 1.52 3.434-.11 1.126-.788 2.047-1.52 2.779l-7.88 7.88-.01.01c-.24.232-.547.43-.84.577-.291.147-.64.279-.979.327l-3.01.43h-.004c-.782.108-1.54-.104-2.077-.638-.537-.535-.752-1.295-.637-2.082v-.001l.43-3.004v-.002c.048-.342.18-.693.327-.987.148-.294.35-.605.588-.843l7.88-7.88c.731-.732 1.652-1.409 2.778-1.52zm.176 1.791c-.504.05-1.053.372-1.681 1l-7.88 7.88c-.062.062-.16.196-.253.38-.092.183-.14.342-.152.429v.002l-.43 3.01-.001.004c-.045.303.046.467.125.547.082.08.252.173.56.131h.001l3.006-.43c.081-.011.238-.06.424-.153.181-.09.321-.19.393-.259l7.874-7.873c.628-.629.951-1.177 1-1.682.045-.457-.116-1.101-1-1.985-.885-.885-1.529-1.046-1.986-1.001z"
      fill={fill}
      fillOpacity={1}
    />
  </Svg>
);
export default EditIcon;
