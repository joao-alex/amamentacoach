import styled from 'styled-components/native';

interface ContainerProps {
  width: number;
}

export const ListContainer = styled.SafeAreaView`
  flex: 1;
`;

export const PageContainer = styled.View<ContainerProps>`
  width: ${(props) => props.width}px;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  flex: 0.2;
`;

export const SkipButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-top: 30px;
  margin-right: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
`;

export const ContentWrapper = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const ContentParagraph = styled.Text`
  font-size: 16px;
  margin: 0 24px;
  flex: 1;
  text-align: center;
`;

export const Footer = styled.View`
  flex-direction: column;
  height: 170px;
  margin: 0 auto;
  bottom: 20px;
  justify-content: space-between;
`;

export const LastPageButtonWrapper = styled.View`
  height: 52px;
  width: 287px;
`;
