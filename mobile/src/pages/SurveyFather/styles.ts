import styled from 'styled-components/native';

interface IScrollViewProps {
  width: number;
}

export const ScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: { flexGrow: 1 },
  keyboardShouldPersistTaps: 'handled',
}))<IScrollViewProps>`
  flex: 1;
  width: ${({ width }) => width}px;
`;

export const HeaderBackground = styled.View`
  background-color: #7d5cd7;
  align-items: center;
  width: 100%;
  height: 170px;
`;

export const HeaderText = styled.Text`
  color: #fafafa;
  text-align: center;
  font-family: 'OpenSans-Regular';
  font-size: 18px;
  margin: -150px 24px 10px 24px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  margin: 0px 24px;
  background-color: white;
  border-radius: 5px;
  padding: 15px 24px;
`;

export const CurrentPageContainer = styled.View`
  background-color: #c1acfc;
  border-radius: 3.6px;
  padding: 10px;
  margin-top: 6px;
  align-self: center;
`;

export const CurrentPageText = styled.Text`
  text-align: center;
  font-family: 'OpenSans-Bold';
  font-size: 16px;
  color: #161026;
`;

export const QuestionText = styled.Text`
  text-align: center;
  font-family: 'OpenSans-Regular';
  font-size: 16px;
  margin: 15px 0;
  color: #161026;
`;

export const ErrorContainer = styled.View`
  min-height: 20px;
`;

export const ErrorText = styled.Text`
  font-family: 'OpenSans-Regular';
  color: #ea3c3c;
  font-size: 14px;
`;

export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
`;

export const FirstSubOptionContainer = styled.View`
  flex: 1;
  margin-right: 4px;
`;

export const SecondSubOptionContainer = styled.View`
  flex: 1;
`;