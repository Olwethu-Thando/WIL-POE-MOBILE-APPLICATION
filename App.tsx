import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homepage from './homepage'; // First screen with "Apply Now"
import applicationformpage from './applicationformpage';
import aboutuspage from './aboutuspage';
import quotationpage from './quotationpage';
import coursepage from './coursepage';
import LogIn from './LogIn'; // Your Login screen
import Firstaid from './Firstaid';
import Sewing from './Sewing';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator for ApplicationForm Page
const ApplicationForm = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ApplicationForm"
      component={applicationformpage}
      options={{ title: 'Application Form' }}
    />
  </Stack.Navigator>
);

// Tab Navigator with menu bar
const AppTabs = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="Home" 
      component={homepage} 
      options={{ title: 'Home' }} 
    />
    <Tab.Screen 
      name="About Us" 
      component={aboutuspage} 
    />
    <Tab.Screen 
      name="Application Form" 
      component={ApplicationForm} 
    />
    <Tab.Screen 
      name="Quotation" 
      component={quotationpage} 
    />
    <Tab.Screen 
      name="Firstaid page" 
      component={Firstaid} 
      
    />
    <Tab.Screen 
      name="Login Page" 
      component={LogIn} 
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
};

export default App;
