import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../../contexts/auth';
import OptionsList, { Options } from '../../../components/OptionList';
import Modal from '../../../components/Modal';
import { checkOneDayPassed } from '../../../utils/date';

import { Header, HeaderTitle, ScrollView } from './styles';

import SurveysOne from '../../../../assets/images/surveys_one.svg';
import SurveysTwo from '../../../../assets/images/surveys_two.svg';
import SurveysThree from '../../../../assets/images/surveys_three.svg';
import SurveysFour from '../../../../assets/images/surveys_four.svg';

const SurveyMenu: React.FC = () => {
  const { motherInfo } = useAuth();
  const navigation = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);

  let options: Options[] = [
    {
      image: SurveysOne,
      title: 'Amamentar um prematuro',
      onPress: async () => {
        // Checa se o usuário já respondeu o formulário no dia.
        if (
          await checkOneDayPassed(
            '@AmamentaCoach:DiarySurveyBreastfeedLastDate',
          )
        ) {
          navigation.navigate('SurveyBreastfeed');
        } else {
          setIsModalVisible(true);
        }
      },
    },
    {
      image: SurveysTwo,
      title: 'Motivação',
      onPress: async () => {
        // Checa se o usuário já respondeu o formulário no dia.
        if (
          await checkOneDayPassed(
            '@AmamentaCoach:DiarySurveyMotivationLastDate',
          )
        ) {
          navigation.navigate('SurveyMotivation');
        } else {
          setIsModalVisible(true);
        }
      },
    },
    {
      image: SurveysThree,
      title: 'Sobre ajuda',
      onPress: async () => {
        // Checa se o usuário já respondeu o formulário no dia.
        if (await checkOneDayPassed('@AmamentaCoach:DiarySurveyHelpLastDate')) {
          navigation.navigate('SurveyHelp');
        } else {
          setIsModalVisible(true);
        }
      },
    },
  ];

  // Exibe o formulário de participação do pai apenas se a mãe tem um companheiro.
  if (motherInfo.partner) {
    options = [
      ...options,
      {
        image: SurveysFour,
        title: 'Sobre a participação do pai',
        onPress: async () => {
          // Checa se o usuário já respondeu o formulário no dia.
          if (
            await checkOneDayPassed('@AmamentaCoach:DiarySurveyFatherLastDate')
          ) {
            navigation.navigate('SurveyFather');
          } else {
            setIsModalVisible(true);
          }
        },
      },
    ];
  }

  return (
    <>
      <Modal
        content="Ops! Você já respondeu a enquete hoje. Volte novamente amanhã."
        options={[
          {
            text: 'Fechar',
            onPress: () => setIsModalVisible(false),
          },
        ]}
        visible={isModalVisible}
      />
      <ScrollView>
        <Header>
          <HeaderTitle>Enquetes</HeaderTitle>
        </Header>
        <OptionsList options={options} />
      </ScrollView>
    </>
  );
};

export default SurveyMenu;
