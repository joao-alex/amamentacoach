import styled from 'styled-components/native';

export const AddQuestionButton = styled.TouchableOpacity`
  margin-right: 18px;
`;

export const FlatlistContainer = styled.View`
  flex: 1;
  margin: 24px 24px 0px 24px;
`;

export const QuestionContainer = styled.View`
  flex: 1;
`;

export const Question = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: 18px;
  color: ${props => props.theme.primary};
  margin-bottom: 5px;
`;

export const Answer = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 16px;
  color: ${props => props.theme.grey};
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  margin: 20px 0;
  background-color: ${props => props.theme.grey};
  opacity: 0.2;
`;

export const LoadingIndicator = styled.ActivityIndicator`
  margin-bottom: 20px;
`;
