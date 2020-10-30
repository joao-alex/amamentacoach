import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: { flexGrow: 1 },
  keyboardShouldPersistTaps: 'handled',
}))``;

export const ContentContainer = styled.View`
  flex: 1;
  margin: 20px 24px;
`;

export const Option = styled.View`
  margin-bottom: 20px;
`;

export const ContentOptionButton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const ContentImage = styled.Image`
  height: 100px;
  width: 100px;
`;

export const ContentTextContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 15px;
`;

export const ContentTitle = styled.Text`
  color: #000000;
  font-family: 'Open-Sans-Bold';
  font-size: 16px;
  flex-wrap: wrap;
  margin-bottom: 3px;
`;

export const ContentSubtitle = styled.Text`
  color: #545454;
  font-family: 'Open-Sans-Regular';
  font-size: 16px;
  flex-wrap: wrap;
`;

export const ContentSeparator = styled.View`
  height: 1px;
  width: 100%;
  background-color: #979797;
  opacity: 0.25;
  margin-top: 20px;
`;