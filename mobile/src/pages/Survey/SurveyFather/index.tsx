import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import theme from '../../../config/theme';
import Survey from '../../../components/Survey';
import createGenericSurveyPage from '../../../components/GenericSurveyPage';

import Father from '../../../../assets/images/dad.png';

const SurveyFather: React.FC = () => {
  const navigation = useNavigation();

  const images = [Father];

  // Marca o formulário como enviado no dia.
  async function setFormSent() {
    await AsyncStorage.setItem(
      '@AmamentaCoach:DiarySurveyFatherLastDate',
      new Date().toISOString(),
    );
  }

  async function onFormEnd() {
    await setFormSent();
    navigation.navigate('Survey');
  }

  return (
    <Survey
      title="Participação do Pai"
      color={theme.babyBlue}
      category={5}
      Page={createGenericSurveyPage(onFormEnd, images)}
      onFeedbackAccepted={setFormSent}
    />
  );
};

export default SurveyFather;
