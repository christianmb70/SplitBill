import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PastTransactionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Past Transactions</Text>
      {/* Add your transaction list here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
