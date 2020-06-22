import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from "../screens/MainScreen";
import { UserScreen } from "../screens/UserScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";
import { ProfileButton } from "../components/ProfileButton";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: THEME.MAIN_COLOR,
        },
        headerBackTitle: ' ',
        headerLeftContainerStyle: { paddingLeft: 22 }
      }}
    >
      <Stack.Screen
        name="Simple blog"
        component={MainScreen}
        options={{
          headerRight: () => <ProfileButton />
        }}
      />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Profile" component={UserScreen} />
    </Stack.Navigator>
  );
};
