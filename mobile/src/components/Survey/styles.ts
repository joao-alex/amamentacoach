import styled from 'styled-components/native';

interface ScrollViewProps {
  width: number;
}

interface HeaderProps {
  color: string;
}

export const ScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: { flexGrow: 1 },
  keyboardShouldPersistTaps: 'handled',
}))<ScrollViewProps>`
  flex: 1;
  width: ${({ width }) => width}px;
`;

export const HeaderBackground = styled.View<HeaderProps>`
  background-color: ${({ color }) => color};
  align-items: center;
  width: 100%;
  height: 170px;
`;

export const HeaderText = styled.Text`
  color: ${props => props.theme.black};
  text-align: center;
  font-family: 'OpenSans-Regular';
  font-size: 18px;
  margin: -150px 24px 10px 24px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  margin: 0px 24px;
  background-color: ${props => props.theme.white};
  border-radius: 5px;
  padding: 24px;
`;
