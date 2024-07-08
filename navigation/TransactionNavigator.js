import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Transaction from '../Screens/Main/Transaction/Transaction';
import PendingPaymentsScreen from '../Screens/Main/Transaction/PendingPaymentsScreen';
import PendingRequestScreen from '../Screens/Main/Transaction/PendingRequestScreen';
import PendingHistory from '../Screens/Main/Transaction/PendingHistory';

const Stack = createStackNavigator();

export default function TransactionNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="TransactionsHome" component={Transaction} options={{ headerShown: false }} />
        <Stack.Screen name="PendingPayments" component={PendingPaymentsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PendingRequests" component={PendingRequestScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PendingHistory" component={PendingHistory} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}