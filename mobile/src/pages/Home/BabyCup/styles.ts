import styled from 'styled-components/native';

interface VideoContainerProps {
  display: boolean;
}

export const ScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: { flexGrow: 1 },
  keyboardShouldPersistTaps: 'handled',
}))`
  flex: 1;
  padding: 24px;
`;

export const VideoLink = styled.Text`
  color: ${props => props.theme.primary};
  font-family: 'OpenSans-Bold';
  font-size: 18px;
  align-self: center;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const VideoContainer = styled.View<VideoContainerProps>`
  justify-content: center;
  display: ${({ display }) => (display ? 'flex' : 'none')};
  margin: 30px 0 30px 0;
`;

export const InstructionContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const Step = styled.Text`
  color: ${props => props.theme.primary};
  font-family: 'OpenSans-Bold';
  font-size: 18px;
  margin-right: 5px;
`;

export const Instruction = styled.Text`
  color: ${props => props.theme.grey};
  font-family: 'OpenSans-Regular';
  font-size: 16px;
  text-align: justify;
  flex-shrink: 1;
`;
