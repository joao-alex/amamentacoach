import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import createDiaryRoutes from './app/diary';
import createSurveyRoutes from './app/survey';
import createHomeRoutes from './app/home';
import createProfileRoutes from './app/profile';
import VideoPage from '../pages/Generic/VideoPage';
import TabNavigator from './tabNavigator';

const AppRoutes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen
        key="TabNavigator"
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      {createHomeRoutes(Stack)}
      {createDiaryRoutes(Stack)}
      {createSurveyRoutes(Stack)}
      {createProfileRoutes(Stack)}
      <Stack.Screen
        key="VideoPage"
        name="VideoPage"
        component={VideoPage}
        options={{ title: 'Vídeo' }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
