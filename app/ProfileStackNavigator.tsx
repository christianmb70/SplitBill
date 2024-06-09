// src/navigation/ProfileStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabTwoScreen from './(tabs)/profile';
import PastTransactionsScreen from './PastTransactionsScreen';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={TabTwoScreen} />
      <Stack.Screen name="PastTransactions" component={PastTransactionsScreen} />
    </Stack.Navigator>
  );
}
