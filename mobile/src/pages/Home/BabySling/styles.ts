import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: { flexGrow: 1 },
  keyboardShouldPersistTaps: 'handled',
}))`
  flex: 1;
  padding: 24px;
`;

export const Container = styled.View`
  align-items: center;
`;

export const Text = styled.Text`
  margin-bottom: 30px;
  color: ${props => props.theme.grey};
  font-family: 'OpenSans-Regular';
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;
