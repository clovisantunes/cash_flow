import React from 'react';
import Routes from './src/routes/AppRoutes';
import { NavigationContainer }  from  '@react-navigation/native';

function App() {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}


export default App;
