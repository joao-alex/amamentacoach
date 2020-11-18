import React, { useRef } from 'react';
import { Dimensions, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ProgressDots from '../../components/ProgressDots';

import {
  ContinueButton,
  TextContinueButton,
  ContentWrapper,
  ContentText,
  Footer,
  LastPageButtonWrapper,
  ListContainer,
  PageContainer,
  ScrollView,
  CurrentPageWrapper,
  ContentTitleText,
} from './styles';

interface IInfoPageProps {
  index: number;
  title: string;
  text: string;
  image: any;
}

const StepByStepPremature: React.FC = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const pageFlatListRef = useRef<FlatList>(null);

  const pages = [
    {
      title: '6 passos para amamentação do bebê prematuro',
      text:
        'Com o nascimento prematuro, é comum que o bebê não consiga sugar logo ao nascer e que ele precise ficar internado para receber alguns cuidados.\n\n Apesar dos desafios, saiba que amamentar o bebê prematuro é possível, e que vale cada esforço!\n\n Os passos a seguir resumem a jornada rumo ao sucesso na amamentação do prematuro',
    },
    {
      image: require('../../../assets/images/meditation.png'),
      title: '1.  Procure a serenidade',
      text:
        'Parto prematuro: quebra de expectativas, incertezas, medo...Quem espera por um nascimento antecipado? Recupere-se do susto, respire fundo, processe o inesperado e abrace a nova realidade.',
    },
    {
      image: require('../../../assets/images/milk.png'),
      title: '2. Estimule a produção láctea',
      text:
        'Em condições normais o bebê geralmente mama a cada 3 horas. No caso, enquanto o bebê não puder sugar, ou enquanto não sugar o suficiente, você substituirá seu pequeno na tarefa de manter as glândulas mamárias ativas, retirando o leite a cada 3 horas.',
    },
    {
      image: require('../../../assets/images/heart.png'),
      title: '3. Estreite o vínculo',
      text:
        'Permaneça o maior tempo possível na Unidade Neonatal, faça muito canguru, observe seu bebê, toque nele, fale com ele, cante pra ele...tudo isso também vai estimular seu corpo a produzir mais leite.',
    },
    {
      image: require('../../../assets/images/protagonist.png'),
      title: '4. Seja a protagonista',
      text:
        'Realize cuidados como a higiene dos olhinhos e a boquinha do seu bebê, a troca de fraldas e o banho; observe e aprenda sobre seus hábitos e preferências. Só você pode fazer seu papel de mãe!',
    },
    {
      image: require('../../../assets/images/community.png'),
      title: '5. Invista em uma rede de apoio',
      text:
        'Procure apoio nos profissionais do serviço (enfermeiros, técnicos, médicos, psicólogos, assistentes sociais...) e em pessoas de sua confiança que te façam bem. Lembre-se: você não está sozinha!',
    },
    {
      image: require('../../../assets/images/time.png'),
      title: '6. Mantenha a paciência',
      text:
        'Quando seu bebê começar a mamar, não se esqueça de que por ser prematuro, ele pode ser mais sonolento, mais “molinho”, e poderá precisar de mais tempo até conseguir dar conta do recado. ',
    },
  ];

  function InfoPage({ index, title, text, image }: IInfoPageProps) {
    return (
      <PageContainer width={width}>
        <ScrollView>
          <ContentTitleText>{title}</ContentTitleText>
          <ContentWrapper>
            <Image source={image} />
            <ContentText>{text}</ContentText>
          </ContentWrapper>
          <Footer>
            <CurrentPageWrapper>
              <ProgressDots
                flatlistRef={pageFlatListRef}
                selectedIndex={index}
                length={pages.length}
              />
            </CurrentPageWrapper>
            <LastPageButtonWrapper opacity={index === pages.length - 1 ? 1 : 0}>
              <ContinueButton onPress={() => navigation.goBack()}>
                <TextContinueButton>Sair</TextContinueButton>
              </ContinueButton>
            </LastPageButtonWrapper>
          </Footer>
        </ScrollView>
      </PageContainer>
    );
  }

  return (
    <ListContainer>
      <FlatList
        ref={pageFlatListRef}
        data={pages}
        renderItem={({ item, index }) => (
          <InfoPage
            index={index}
            title={item.title}
            text={item.text}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.text}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </ListContainer>
  );
};

export default StepByStepPremature;
