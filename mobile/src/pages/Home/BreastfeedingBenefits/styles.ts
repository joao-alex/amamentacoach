import styled from 'styled-components/native';

interface IContainerProps {
  width: number;
}

interface ILastPageButtonWrapperProps {
  opacity: number;
}

export const ScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: { flexGrow: 1 },
  keyboardShouldPersistTaps: 'handled',
}))`
  flex: 1;
  padding: 24px;
`;

export const ListContainer = styled.SafeAreaView`
  flex: 1;
`;

export const PageContainer = styled.View<IContainerProps>`
  width: ${({ width }) => width}px;
  flex: 1;
`;

export const ContentTitleText = styled.Text`
  font-family: 'OpenSans-Regular';
  color: #000000;
  font-size: 18px;
  text-align: center;
  margin: 20px 24px 0 24px;
`;

export const ContentWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0px 24px;
`;

export const ContentHeaderText = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 16px;
  text-align: center;
  color: #7d5cd7;
  margin-top: 20px;
`;

export const ContentText = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 16px;
  text-align: center;
  color: #545454;
`;

export const Footer = styled.View`
  flex-direction: column;
  margin: 0 24px;
  margin-bottom: 30px;
`;

export const CurrentPageWrapper = styled.View`
  margin: 30px 0;
`;

export const LastPageButtonWrapper = styled.View<ILastPageButtonWrapperProps>`
  opacity: ${({ opacity }) => opacity};
  justify-content: center;
  align-items: center;
`;

export const ContinueButton = styled.TouchableOpacity`
  width: 100%;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

export const TextContinueButton = styled.Text`
  color: #545454;
  font-family: 'OpenSans-Regular';
  font-size: 18px;
`;