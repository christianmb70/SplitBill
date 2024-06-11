import { Tabs } from 'expo-router';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import TabTwoScreen from './profile';
import PastTransactionsScreen from '../PastTransactionsScreen';
import ProfileStack from '../ProfileStackNavigator';

// const Stack = createNativeStackNavigator();

// function ProfileStack() {
//   return(
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Profile" component={TabTwoScreen} />
//       <Stack.Screen name="PastTransactions" component={PastTransactionsScreen} />
//     </Stack.Navigator>
//   );
// }

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileStack"
        // component={ProfileStack}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="unequal"
        options={{
          title: 'Unequal',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}