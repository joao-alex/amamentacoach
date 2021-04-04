import React from 'react';

import { useIsFirstRun } from '../../contexts/firstRun';
import purpleHeader from '../config/purpleHeader';

import AdditionalInformation from '../../pages/Home/AdditionalInformation';
import BabyCup from '../../pages/Home/BabyCup';
import BreastfeedingBenefits from '../../pages/Home/BreastfeedingBenefits';
import Distractions from '../../pages/Home/Distractions';
import EmotionsAndBreastfeeding from '../../pages/Home/EmotionsAndBreastfeeding';
import HowToBreastfeed from '../../pages/Home/HowToBreastfeed';
import HU from '../../pages/Home/HU';
import IntroductionStatusForm from '../../pages/Home/IntroductionStatusForm';
import ManageExpectations from '../../pages/Home/ManageExpectations';
import Messages from '../../pages/Home/Messages';
import MusicPlaylists from '../../pages/Home/MusicPlaylists';
import NewMessage from '../../pages/Home/NewMessage';
import NewQuestion from '../../pages/Home/NewQuestion';
import NotWhatIExpected from '../../pages/Home/NotWhatIExpected';
import Premature from '../../pages/Home/Premature';
import Questions from '../../pages/Home/Questions';
import Resilience from '../../pages/Home/Resilience';
import StatusForm from '../../pages/Home/StatusForm';
import StepByStepPremature from '../../pages/Home/StepByStepPremature';
import ThePremature from '../../pages/Home/ThePremature';
import UploadBabyPhoto from '../../pages/Home/UploadBabyPhoto';
import UploadFatherPhoto from '../../pages/Home/UploadFatherPhoto';
import UploadMotherPhoto from '../../pages/Home/UploadMotherPhoto';
import WhyBreastfeed from '../../pages/Home/WhyBreastfeed';

const CreateHomeRoutes = (Stack: any) => {
  const { isFirstRun } = useIsFirstRun();

  return [
    <Stack.Screen
      key="AdditionalInformation"
      name="AdditionalInformation"
      component={AdditionalInformation}
      options={{ title: 'Mais informações' }}
    />,
    <Stack.Screen
      key="BabyCup"
      name="BabyCup"
      component={BabyCup}
      options={{ title: 'Oferta de leite pelo copinho' }}
    />,
    <Stack.Screen
      key="BreastfeedingBenefits"
      name="BreastfeedingBenefits"
      component={BreastfeedingBenefits}
      options={{ title: 'Infográfico' }}
    />,
    <Stack.Screen
      key="Distractions"
      name="Distractions"
      component={Distractions}
      options={{ title: 'Caixinha da distração' }}
    />,
    <Stack.Screen
      key="EmotionsAndBreastfeeding"
      name="EmotionsAndBreastfeeding"
      component={EmotionsAndBreastfeeding}
      options={{ title: 'Emoções e amamentação' }}
    />,
    <Stack.Screen
      key="HowToBreastfeed"
      name="HowToBreastfeed"
      component={HowToBreastfeed}
      options={{ title: 'Retirada do leite' }}
    />,
    <Stack.Screen
      key="HU"
      name="HU"
      component={HU}
      options={{ title: 'Sinta-se em casa!' }}
    />,
    <Stack.Screen
      key="ManageExpectations"
      name="ManageExpectations"
      component={ManageExpectations}
      options={{ title: 'Caixinha da distração' }}
    />,
    <Stack.Screen
      key="Messages"
      name="Messages"
      component={Messages}
      options={{ title: 'Mural de mensagens' }}
    />,
    <Stack.Screen
      key="MusicPlaylists"
      name="MusicPlaylists"
      component={MusicPlaylists}
      options={{ title: 'Músicas para relaxar' }}
    />,
    <Stack.Screen
      key="NewMessage"
      name="NewMessage"
      component={NewMessage}
      options={{ title: 'Enviar mensagem' }}
    />,
    <Stack.Screen
      key="NewQuestion"
      name="NewQuestion"
      component={NewQuestion}
      options={{ title: 'Enviar Pergunta' }}
    />,
    <Stack.Screen
      key="NotWhatIExpected"
      name="NotWhatIExpected"
      component={NotWhatIExpected}
      options={{ title: 'O Prematuro', ...purpleHeader }}
    />,
    <Stack.Screen
      key="Premature"
      name="Premature"
      component={Premature}
      options={{ title: 'O Prematuro' }}
    />,
    <Stack.Screen
      key="Questions"
      name="Questions"
      component={Questions}
      options={{ title: 'Perguntas' }}
    />,
    <Stack.Screen
      key="Resilience"
      name="Resilience"
      component={Resilience}
      options={{ title: 'Resiliência' }}
    />,
    <Stack.Screen
      key="StatusForm"
      name="StatusForm"
      component={
        isFirstRun.persistent.statusFormIntroduction
          ? IntroductionStatusForm
          : StatusForm
      }
      options={
        isFirstRun.persistent.statusFormIntroduction
          ? { title: 'Enquete' }
          : { title: 'Enquete', ...purpleHeader }
      }
    />,
    <Stack.Screen
      key="StepByStepPremature"
      name="StepByStepPremature"
      component={StepByStepPremature}
      options={{ title: 'Infográfico' }}
    />,
    <Stack.Screen
      key="ThePremature"
      name="ThePremature"
      component={ThePremature}
      options={{ title: 'Sou o Prematuro' }}
    />,
    <Stack.Screen
      key="UploadBabyPhoto"
      name="UploadBabyPhoto"
      component={UploadBabyPhoto}
      options={{ title: 'Minha maior motivação' }}
    />,
    <Stack.Screen
      key="UploadFatherPhoto"
      name="UploadFatherPhoto"
      component={UploadFatherPhoto}
      options={{ title: 'O Papai' }}
    />,
    <Stack.Screen
      key="UploadMotherPhoto"
      name="UploadMotherPhoto"
      component={UploadMotherPhoto}
      options={{ title: 'Espelho' }}
    />,
    <Stack.Screen
      key="WhyBreastfeed"
      name="WhyBreastfeed"
      component={WhyBreastfeed}
      options={{ title: 'Retirada do leite' }}
    />,
  ];
};

export default CreateHomeRoutes;
