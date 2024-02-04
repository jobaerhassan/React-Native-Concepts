import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../styles/colors.style.asset';
import {iconProps} from './interface';

const ArchiveIcon: React.FC<iconProps> = ({
  width = 24,
  height = 24,
  fill = colors.white,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0001 2.09961C12.4972 2.09961 12.9001 2.50255 12.9001 2.99961V7.04281L13.4144 6.60199C13.7918 6.27851 14.3599 6.32222 14.6834 6.69961C15.0069 7.077 14.9632 7.64517 14.5858 7.96865L12.5858 9.68294C12.3189 9.91168 11.9433 9.96414 11.624 9.81727C11.3047 9.6704 11.1001 9.35109 11.1001 8.99961V2.99961C11.1001 2.50255 11.503 2.09961 12.0001 2.09961Z"
      fill="#292D32"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.3637 6.36321C9.71517 6.01174 10.285 6.01174 10.6365 6.36321L12.6365 8.36321C12.988 8.71469 12.988 9.28453 12.6365 9.63601C12.285 9.98748 11.7152 9.98748 11.3637 9.63601L9.3637 7.63601C9.01223 7.28453 9.01223 6.71468 9.3637 6.36321Z"
      fill="#292D32"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.1001 12.9996C2.1001 12.5026 2.50304 12.0996 3.0001 12.0996H6.9691C7.70394 12.0996 8.30906 12.5541 8.59083 13.1803L9.64383 15.5203C9.82248 15.9173 10.1461 16.0996 10.4341 16.0996H13.6111C13.8991 16.0996 14.2227 15.9173 14.4014 15.5203L15.4544 13.1803C15.7384 12.549 16.3554 12.0996 17.0761 12.0996H21.0001C21.4972 12.0996 21.9001 12.5026 21.9001 12.9996C21.9001 13.4967 21.4972 13.8996 21.0001 13.8996H17.1069C17.1036 13.904 17.0997 13.9103 17.0958 13.9189L16.0428 16.2589C15.6095 17.2219 14.6911 17.8996 13.6111 17.8996H10.4341C9.35409 17.8996 8.43571 17.2219 8.00237 16.2589L6.94937 13.9189C6.94562 13.9106 6.94204 13.9043 6.939 13.8996H3.0001C2.50304 13.8996 2.1001 13.4967 2.1001 12.9996Z"
      fill="#292D32"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.39064 4.86947C8.46251 5.3613 8.12207 5.81828 7.63024 5.89015C6.19339 6.10012 5.32496 6.59872 4.78381 7.34459C4.21929 8.12266 3.9001 9.319 3.9001 11.1507V14.7321C3.9001 16.8808 4.33743 18.1506 5.09735 18.9066C5.85841 19.6638 7.13788 20.0996 9.3001 20.0996H14.7001C16.8623 20.0996 18.1418 19.6638 18.9028 18.9066C19.6628 18.1506 20.1001 16.8808 20.1001 14.7321V11.1507C20.1001 9.319 19.7809 8.12266 19.2164 7.34459C18.6752 6.59872 17.8068 6.10012 16.37 5.89015C15.8781 5.81828 15.5377 5.3613 15.6096 4.86947C15.6814 4.37764 16.1384 4.03719 16.6302 4.10907C18.3794 4.36468 19.761 5.03004 20.6733 6.28754C21.5623 7.51282 21.9001 9.15924 21.9001 11.1507V14.7321C21.9001 17.0603 21.4374 18.9241 20.1723 20.1827C18.9084 21.4401 17.0379 21.8996 14.7001 21.8996H9.3001C6.96231 21.8996 5.09179 21.4401 3.82785 20.1827C2.56277 18.9241 2.1001 17.0603 2.1001 14.7321V11.1507C2.1001 9.15924 2.4379 7.51282 3.32688 6.28754C4.23924 5.03004 5.62081 4.36468 7.36996 4.10907C7.86179 4.03719 8.31877 4.37764 8.39064 4.86947Z"
      fill="#292D32"
    />
  </Svg>
);
export default ArchiveIcon;