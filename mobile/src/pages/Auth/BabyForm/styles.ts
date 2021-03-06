import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: { flexGrow: 1 },
  keyboardShouldPersistTaps: 'handled',
}))`
  flex: 1;
  padding: 24px;
`;

export const HeaderText = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: 18px;
  color: ${props => props.theme.primary};
  text-align: center;
`;

export const HeaderSubText = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 14px;
  margin: 0 auto 15px auto;
  text-align: center;
  padding-top: 20px;
`;

export const FormContainer = styled.View`
  flex: 1;
  margin-bottom: 20px;
`;

export const SubOptionsContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const GestationWeeksContainer = styled.View`
  flex: 2;
  margin-right: 4px;
`;

export const GestationDaysContainer = styled.View`
  flex: 1;
`;

export const FirstSubOptionContainer = styled.View`
  flex: 1;
  margin-right: 4px;
`;

export const SecondSubOptionContainer = styled.View`
  flex: 1;
  align-content: center;
  justify-content: center;
`;

export const ApgarTextHeader = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 14px;
  margin-bottom: -16px;
`;

export const ApgarTextContainer = styled.View`
  align-content: center;
  justify-content: center;
`;

export const ApgarText = styled.Text`
  font-family: 'OpenSans-Regular';
  margin-right: 4px;
`;

export const ApgarHelpButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const SubmitButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: 15px 0px;
`;
