import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { TextButton, Button } from './styles';

interface MainButtonProps extends TouchableOpacityProps {
  text: string;
  color?: string;
}

const MainButton: React.FC<MainButtonProps> = ({
  text,
  color,
  disabled,
  onPress,
}) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.9}>
      <TextButton color={color} disabled={disabled}>
        {text}
      </TextButton>
    </Button>
  );
};

export default MainButton;
