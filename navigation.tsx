import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './homepage';
import AboutUsScreen from './aboutuspage';
import CoursePage from './coursepage';
import LogIn from './LogIn';
import FirstAid from './Firstaid';
import Sewing from './Sewing';
import ApplicationFormPage from './applicationformpage'; // Import ApplicationFormPage

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Aboutus" component={AboutUsScreen} />
        <Stack.Screen name="Coursepage" component={CoursePage} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Firstaid" component={FirstAid} />
        <Stack.Screen name="Sewing" component={Sewing} />
        <Stack.Screen 
          name="ApplicationFormPage" 
          component={ApplicationFormPage} // Register ApplicationFormPage
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
