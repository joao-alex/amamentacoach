import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const LabelText = styled.Text`
  font-family: 'OpenSans-Regular';
  color: #161026;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const TextInput = styled.TextInput`
  font-family: 'OpenSans-Regular';
  background-color: #e7e7e7;
  color: #161026;
  padding-left: 20px;
  border-radius: 3.6px;
`;

export const ErrorContainer = styled.View`
  flex: 1;
  min-height: 20px;
  margin-top: 5px;
`;

export const ErrorText = styled.Text`
  font-family: 'OpenSans-Regular';
  color: #ea3c3c;
  font-size: 14px;
`;
