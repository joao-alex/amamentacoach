import React, { useState, useEffect, useRef } from 'react';
import { ActivityIndicator, Dimensions, FlatList } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Formik } from 'formik';

import theme from '../../../config/theme';
import { useAuth } from '../../../contexts/auth';
import {
  getSurveyQuestions,
  SurveyQuestion,
} from '../../../utils/getSurveyQuestions';
import { answerStatusForm, answerFeedingForm } from '../../../services/survey';
import Modal from '../../../components/Modal';
import FormRadioGroupInput from '../../../components/FormRadioGroup';
import MainButton from '../../../components/MainButton';
import SecondaryButton from '../../../components/SecondaryButton';

import {
  HeaderBackground,
  ContentContainer,
  HeaderText,
  ScrollView,
  QuestionContainer,
  QuestionText,
  Footer,
  InfoButton,
  HeaderInfoModal,
  TextInfoModal,
  ColoredText,
  SecondButtonContainer,
  FirstButtonContainer,
} from './styles';
import {
  CurrentPageContainer,
  CurrentPageText,
} from '../../../components/GenericSurveyPage/styles';

import QuestionIcon from '../../../../assets/images/icons/ic_question_white.svg';

// Página do formulário.
interface PageProps {
  pageIndex: number;
  questions: SurveyQuestion[];
  values: {
    [key: string]: string[];
  };
  errors: {
    [key: string]: string;
  };
  setFieldError: (field: string, message: string) => void;
  // Define o valor de uma resposta.
  setFieldValue: (field: string, value: any) => void;
  submitForm: () => Promise<number | null>;
}

type ScreenParams = {
  StatusForm: {
    situation: 'ALTA' | '1D' | '15D' | '1M';
  };
};

const StatusForm: React.FC = () => {
  const { width } = Dimensions.get('window');
  const navigation = useNavigation();
  const { motherInfo } = useAuth();
  const { situation } = useRoute<
    RouteProp<ScreenParams, 'StatusForm'>
  >().params;

  // Não exibe a questão de alimentação se for a primeira vez do usuário respondendo a escala.
  const displayFeedingForm = situation !== '1D';

  const [pageQuestions, setPageQuestions] = useState<SurveyQuestion[][]>([]);
  const [feedingQuestion, setFeedingQuestion] = useState<SurveyQuestion>();

  const pageFlatListRef = useRef<FlatList>(null);
  const [formInitialValues, setFormInitialValues] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSendingForm, setIsSendingForm] = useState(false);
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [formScore, setFormScore] = useState<number | null>(null);

  // Adiciona um botão na parte superior direita da tela para exibir um popup de ajuda.
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <InfoButton
          onPress={() => setIsInfoModalVisible(true)}
          activeOpacity={0.7}>
          <QuestionIcon />
        </InfoButton>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    async function fetchQuestions() {
      const statusQuestions = await getSurveyQuestions(motherInfo, {
        category: 7,
      });
      const feedingQuestions = await getSurveyQuestions(motherInfo, {
        id: 6,
      });
      if (!statusQuestions || !feedingQuestions) {
        return;
      }

      // Inicia todas as respostas vazias.
      let initialValues = statusQuestions.reduce(
        (object, page) => ({
          ...object,
          [page.id]: [],
        }),
        {},
      );

      if (displayFeedingForm) {
        initialValues = { ...initialValues, feeding: '' };
        setFeedingQuestion(feedingQuestions[0]);
      }

      const pages = [];
      // Separa 3 perguntas por página.
      for (let i = 0; i < statusQuestions.length; i += 3)
        pages.push(statusQuestions.slice(i, i + 3));
      setPageQuestions(pages);

      setFormInitialValues(initialValues);
      setIsLoading(false);
    }

    fetchQuestions();
  }, []);

  // Envia as respostas do usuário.
  async function handleFormSubmit(values: { [key: string]: string[] }) {
    const { feeding, ...answers } = values;

    const statusAnswers = Object.keys(answers).map(key => ({
      id: parseInt(key, 10),
      content: values[key][0],
    }));
    const statusFormScore = await answerStatusForm(situation, statusAnswers);

    if (displayFeedingForm) {
      // @ts-ignore
      await answerFeedingForm(situation, feeding[0]);
    }
    return statusFormScore;
  }

  // Verifica se pelo menos uma opção foi selecionada para cada pergunta da página.
  function validateForm(
    currentPageIndex: number,
    questions: SurveyQuestion[],
    values: {
      [key: string]: string[];
    },
    setFieldError: (field: string, message: string) => void,
  ) {
    let isValid = true;
    questions.forEach(question => {
      if (values[question.id].length <= 0) {
        setFieldError(question.id.toString(), 'Pergunta obrigatória');
        isValid = false;
      } else {
        setFieldError(question.id.toString(), '');
      }
    });

    if (currentPageIndex === pageQuestions.length - 1 && displayFeedingForm) {
      if (values.feeding.length <= 0) {
        setFieldError('feeding', 'Pergunta obrigatória');
        isValid = false;
      } else {
        setFieldError('feeding', '');
      }
    }
    return isValid;
  }

  // Altera a página atual do formulário, entretanto a mudança de página só é possível se os campos
  // dá pagina atual estiverem preenchidos.
  // Caso a página atual seja a última o formulário é enviado.
  async function handleChangePage(
    currentPage: number,
    newPage: number,
    questions: SurveyQuestion[],
    values: {
      [key: string]: string[];
    },
    setFieldError: (field: string, message: string) => void,
    submitForm: () => Promise<number | null>,
  ) {
    // Verifica se pelo menos uma resposta foi selecionada ao avançar a página.
    if (
      newPage > currentPage &&
      !validateForm(currentPage, questions, values, setFieldError)
    ) {
      return;
    }

    // Envia o formulário caso seja a última página
    if (newPage === pageQuestions.length) {
      setIsSendingForm(true);
      const score = await submitForm();
      setIsSendingForm(false);
      if (score) {
        setFormScore(score);
      } else {
        setIsErrorModalVisible(true);
      }
    } else {
      pageFlatListRef.current?.scrollToIndex({
        animated: true,
        index: newPage,
      });
    }
  }

  // Página do formulário.
  const Page: React.FC<PageProps> = ({
    pageIndex,
    questions,
    values,
    errors,
    setFieldValue,
    setFieldError,
    submitForm,
  }) => {
    return (
      <ContentContainer>
        <CurrentPageContainer color={theme.babyBlue}>
          <CurrentPageText>
            {pageIndex + 1}/{pageQuestions.length}
          </CurrentPageText>
        </CurrentPageContainer>

        {questions.map((question, questionIndex) => (
          <QuestionContainer key={question.id}>
            <QuestionText>
              {pageIndex * 3 + questionIndex + 1} - {question.description}
            </QuestionText>

            <FormRadioGroupInput
              color={theme.babyBlue}
              fieldName={`${question.id}`}
              options={question.options}
              multipleSelection={question.multipleSelection}
              displayOtherField={question.displayOther}
              error={errors[question.id]}
              initialValues={values[question.id]}
              onChange={setFieldValue}
              horizontal
            />
          </QuestionContainer>
        ))}

        {feedingQuestion && pageIndex >= pageQuestions.length - 1 && (
          <QuestionContainer key={feedingQuestion.id}>
            <QuestionText>
              {pageQuestions.length * 3 + 1} - {feedingQuestion.description}
            </QuestionText>

            <FormRadioGroupInput
              color={theme.babyBlue}
              fieldName="feeding"
              options={feedingQuestion.options}
              multipleSelection={feedingQuestion.multipleSelection}
              displayOtherField={feedingQuestion.displayOther}
              error={(errors as { [k: string]: string }).feeding}
              initialValues={values.feeding}
              onChange={setFieldValue}
            />
          </QuestionContainer>
        )}

        <Footer>
          {pageIndex > 0 && (
            <FirstButtonContainer>
              <SecondaryButton
                color={theme.babyBlue}
                text="Voltar"
                disabled={isSendingForm}
                onPress={() =>
                  handleChangePage(
                    pageIndex,
                    pageIndex - 1,
                    questions,
                    values,
                    setFieldError,
                    submitForm,
                  )
                }
              />
            </FirstButtonContainer>
          )}
          <SecondButtonContainer>
            <MainButton
              color={theme.babyBlue}
              text={
                pageIndex >= pageQuestions.length - 1 ? 'Finalizar' : 'Próximo'
              }
              disabled={isSendingForm}
              onPress={() =>
                handleChangePage(
                  pageIndex,
                  pageIndex + 1,
                  questions,
                  values,
                  setFieldError,
                  submitForm,
                )
              }
            />
          </SecondButtonContainer>
        </Footer>
      </ContentContainer>
    );
  };

  if (isLoading) {
    return (
      <>
        <HeaderBackground />
        <HeaderText>Autoconfiança para amamentar</HeaderText>
        <ContentContainer>
          <ActivityIndicator
            size="large"
            color={theme.babyBlue}
            animating={isLoading}
          />
        </ContentContainer>
      </>
    );
  }

  return (
    <>
      <Modal
        content={`Obrigada por responder.\nSua pontuação é ${formScore}`}
        color={theme.babyBlue}
        options={[
          {
            text: 'Fechar',
            isBold: true,
            onPress: () => navigation.navigate('Home'),
          },
        ]}
        visible={!!formScore}
      />
      <Modal
        color={theme.babyBlue}
        content={
          'Erro ao enviar suas respostas.\nPor favor tente novamente mais tarde.'
        }
        options={[
          {
            text: 'Fechar',
            isBold: true,
            onPress: () => setIsErrorModalVisible(false),
          },
        ]}
        visible={isErrorModalVisible}
      />
      <Modal
        color={theme.babyBlue}
        options={[
          {
            text: 'Fechar',
            isBold: true,
            onPress: () => setIsInfoModalVisible(false),
          },
        ]}
        visible={isInfoModalVisible}>
        <HeaderInfoModal>Escala</HeaderInfoModal>
        <TextInfoModal>
          <ColoredText>1</ColoredText> = nada confiante
        </TextInfoModal>
        <TextInfoModal>
          <ColoredText>2</ColoredText> = muito pouco confiante
        </TextInfoModal>
        <TextInfoModal>
          <ColoredText>3</ColoredText> = às vezes confiante
        </TextInfoModal>
        <TextInfoModal>
          <ColoredText>4</ColoredText> = confiante
        </TextInfoModal>
        <TextInfoModal>
          <ColoredText>5</ColoredText> = muito confiante
        </TextInfoModal>
      </Modal>

      <Formik
        initialValues={formInitialValues}
        validateOnChange={false}
        onSubmit={values => handleFormSubmit(values)}>
        {({ values, errors, setFieldError, submitForm, setFieldValue }) => (
          <FlatList
            ref={pageFlatListRef}
            data={pageQuestions}
            renderItem={({ item, index }) => (
              <ScrollView width={width}>
                <HeaderBackground />
                <HeaderText>Autoconfiança para amamentar</HeaderText>
                <Page
                  pageIndex={index}
                  questions={item}
                  values={values}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  setFieldError={setFieldError}
                  submitForm={submitForm}
                />
              </ScrollView>
            )}
            keyExtractor={item => item[0].id.toString()}
            horizontal
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          />
        )}
      </Formik>
    </>
  );
};

export default StatusForm;
