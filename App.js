import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { useFonts } from 'expo-font';
import HomeScreen from './src/screens/HomeScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import CategoryProducts from './src/screens/CategoryProducts';
import { StatusBar, View, ActivityIndicator } from 'react-native';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  ResultsShow: ResultsShowScreen,
  CategoryProducts: CategoryProducts,
  Search: SearchScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Reastaurants',
    headerShown: false,
  }
});

const AppContainer = createAppContainer(navigator);

export default function App() {
  
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
  });

  if (!fontsLoaded) {
    return <View style={{flex: 1, flexDirection: "row"}}><ActivityIndicator size="large" style={{margin: "auto"}} /></View>;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        <AppContainer />
      </View>
    );
  }
}
