import React from 'react';
import { StyledAvatar } from './styles';
import { User } from '@styled-icons/feather';
import getFirstLetters from '../../../utils/getFirstLetters';

export interface AvatarProps {
  src?: string;
  text?: string;
  color: 'primary' | 'warning' | 'success' | 'error';
  use?: 'colored' | 'white' | 'default';
}

const Avatar = ({
  src,
  text,
  color = 'primary',
  use = 'default',
  ...rest
}: AvatarProps): JSX.Element => (
  <StyledAvatar src={src} color={color} use={use} {...rest}>
    {text ? <p>{getFirstLetters(text)}</p> : <User size="30" color="#fff" />}
  </StyledAvatar>
);

export default Avatar;
