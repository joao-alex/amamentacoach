import styled from 'styled-components/native';

export const Registry = styled.View`
  border: 2px ${props => props.theme.brightGrey} solid;
  border-radius: 3.6px;
  padding: 15px;
  margin-bottom: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextContainer = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text`
  color: ${props => props.theme.primary};
  font-size: 16px;
  font-family: 'OpenSans-Regular';
`;

export const Content = styled.Text`
  font-size: 16px;
  font-family: 'OpenSans-Regular';
`;
