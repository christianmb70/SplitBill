import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  PastTransactions: undefined;
};

export type TabParamList = {
  Home: undefined;
  ProfileStack: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default Stack;
