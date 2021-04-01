import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../../contexts/auth';
import OptionsList from '../../../components/OptionList';

import { Header, HeaderTitle, ScrollView } from './styles';

const SurveyMenu: React.FC = () => {
  const { motherInfo } = useAuth();
  const navigation = useNavigation();

  let options = [
    {
      image: require('../../../../assets/images/surveys_one.png'),
      title: 'Amamentar um prematuro',
      onPress: () => navigation.navigate('SurveyBreastfeed'),
    },
    {
      image: require('../../../../assets/images/surveys_two.png'),
      title: 'Motivação',
      onPress: () => navigation.navigate('SurveyMotivation'),
    },
    {
      image: require('../../../../assets/images/surveys_three.png'),
      title: 'Sobre ajuda',
      onPress: () => navigation.navigate('SurveyHelp'),
    },
  ];

  // Exibe o formulário de participação do pai apenas se a mãe tem um companheiro.
  if (motherInfo.partner) {
    options = [
      ...options,
      {
        image: require('../../../../assets/images/surveys_four.png'),
        title: 'Sobre a participação do pai',
        onPress: () => navigation.navigate('SurveyFather'),
      },
    ];
  }

  return (
    <ScrollView>
      <Header>
        <HeaderTitle>Enquetes</HeaderTitle>
      </Header>
      <OptionsList options={options} />
    </ScrollView>
  );
};

export default SurveyMenu;