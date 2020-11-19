import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AdditionalInformation from '../pages/AdditionalInformation';
import BreastfeedingBenefits from '../pages/BreastfeedingBenefits';
import Distractions from '../pages/Distractions';
import EmotionsAndBreastfeeding from '../pages/EmotionsAndBreastfeeding';
import Home from '../pages/Home';
import HowToBreastfeed from '../pages/HowToBreastfeed';
import HU from '../pages/HU';
import NewPassword from '../pages/NewPassword';
import NotWhatIExpected from '../pages/NotWhatIExpected';
import Premature from '../pages/Premature';
import Resilience from '../pages/Resilience';
import StepByStepPremature from '../pages/StepByStepPremature';
import TabNavigator from './tabNavigator';
import ThePremature from '../pages/ThePremature';
import VideoPage from '../pages/VideoPage';
import DiaryRegistry from '../pages/DiaryRegistry';
import NewDiaryRegistry from '../pages/NewDiaryRegistry';

const AppRoutes: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{ title: 'Alterar senha' }}
      />
      <Stack.Screen
        name="StepByStepPremature"
        component={StepByStepPremature}
        options={{ title: 'Infográfico' }}
      />
      <Stack.Screen
        name="NotWhatIExpected"
        component={NotWhatIExpected}
        options={{
          title: 'O Prematuro',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#7D5CD7',
            elevation: 0, // Remove a sombra no Android
            shadowOpacity: 0, // Remove a sombra no iOS
          },
        }}
      />
      <Stack.Screen
        name="ThePremature"
        component={ThePremature}
        options={{ title: 'Sou o Prematuro' }}
      />
      <Stack.Screen
        name="VideoPage"
        component={VideoPage}
        options={{ title: 'Vídeo' }}
      />
      <Stack.Screen
        name="BreastfeedingBenefits"
        component={BreastfeedingBenefits}
        options={{ title: 'Infográfico' }}
      />
      <Stack.Screen
        name="Distractions"
        component={Distractions}
        options={{ title: 'Caixinha da distração' }}
      />
      <Stack.Screen
        name="Resilience"
        component={Resilience}
        options={{ title: 'Resiliência' }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HU"
        component={HU}
        options={{ title: 'Sinta-se em casa!' }}
      />
      <Stack.Screen
        name="Premature"
        component={Premature}
        options={{ title: 'O Prematuro' }}
      />
      <Stack.Screen
        name="HowToBreastfeed"
        component={HowToBreastfeed}
        options={{ title: 'Retirada do leite' }}
      />
      <Stack.Screen
        name="EmotionsAndBreastfeeding"
        component={EmotionsAndBreastfeeding}
        options={{ title: 'Emoções e amamentação' }}
      />
      <Stack.Screen
        name="AdditionalInformation"
        component={AdditionalInformation}
        options={{ title: 'Mais informações' }}
      />
      <Stack.Screen
        name="DiaryRegistry"
        component={DiaryRegistry}
        options={{ title: 'Diário' }}
      />
      <Stack.Screen
        name="NewDiaryRegistry"
        component={NewDiaryRegistry}
        options={{ title: 'Diário' }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
