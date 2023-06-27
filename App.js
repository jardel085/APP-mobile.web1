import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import TeamInfoScreen from './screens/TeamInfoScreen';
import PlayerInfoScreen from './screens/PlayerInfoScreen';
import EventsScreen from './screens/EventsScreen';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="profetizaBET"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
  name="profetizaBET"
  component={HomeScreen}
  options={{
    title: 'profetizaBET',
    drawerLabelStyle: { color: 'green' } // Adicione a cor desejada aqui
  }}
/>

        <Drawer.Screen
          name="TimeInfo"
          component={TeamInfoScreen}
          options={{ title: 'Busque um time  '}}

        />
        <Drawer.Screen
          name="PlayerInfo"
          component={PlayerInfoScreen}
          options={{ title: 'Busque um Jogador' }}
          />
        <Drawer.Screen
          name="Events"
          component={EventsScreen}
          options={{ title: 'Próximos jogos' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
