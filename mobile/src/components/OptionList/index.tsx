import React from 'react';
import ImageWrapper, { ImageWrapperSourcePropType } from '../ImageWrapper';

import {
  ContentContainer,
  ContentHeader,
  ContentOptionButton,
  ContentTitle,
  ContentSubtitle,
  ContentSeparator,
  Option,
  ContentTextContainer,
} from './styles';

import NextIcon from '../../../assets/images/icons/ic_next.svg';

export interface Options {
  image?: ImageWrapperSourcePropType;
  title: string;
  subtitle?: string;
  onPress: () => void;
}

interface OptionListProps {
  options: Options[];
  label?: string;
  displayArrows?: boolean;
}

const OptionsList: React.FC<OptionListProps> = ({
  options,
  label = null,
  displayArrows = false,
}) => {
  return (
    <ContentContainer>
      {label && <ContentHeader>{label}</ContentHeader>}
      {options.map(({ image, title, subtitle, onPress }, index) => (
        <Option key={title}>
          <ContentOptionButton activeOpacity={0.7} onPress={onPress}>
            {image && <ImageWrapper source={image} width={70} height={70} />}

            <ContentTextContainer>
              <ContentTitle>{title}</ContentTitle>
              {subtitle && <ContentSubtitle>{subtitle}</ContentSubtitle>}
            </ContentTextContainer>

            {displayArrows && <NextIcon height={15} width={20} />}
          </ContentOptionButton>
          {index < options.length - 1 && <ContentSeparator />}
        </Option>
      ))}
    </ContentContainer>
  );
};

export default OptionsList;
