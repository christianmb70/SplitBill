import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const transactions = [
  {
    id: '1',
    date: '2024-06-01',
    description: 'Groceries',
    amount: '-$50.25',
    total: '$50.25',
    tipPercent: '0%',
    splitType: 'Even',
    people: [{ name: 'Alice', paid: true, amountPaid: '$50.25' }]
  },
  {
    id: '2',
    date: '2024-06-03',
    description: 'Salary',
    amount: '+$1500.00',
    total: '$1500.00',
    tipPercent: '0%',
    splitType: 'Even',
    people: [{ name: 'Bob', paid: true, amountPaid: '$1500.00' }]
  },
  {
    id: '3',
    date: '2024-06-05',
    description: 'Electricity Bill',
    amount: '-$75.30',
    total: '$75.30',
    tipPercent: '0%',
    splitType: 'Even',
    people: [{ name: 'Charlie', paid: true, amountPaid: '$75.30' }]
  },
  {
    id: '4',
    date: '2024-06-07',
    description: 'Dinner',
    amount: '-$30.45',
    total: '$40.60',
    tipPercent: '15%',
    splitType: 'Custom',
    people: [
      { name: 'David', paid: false, amountPaid: '$0.00' },
      { name: 'Eva', paid: true, amountPaid: '$40.60' }
    ]
  },
  {
    id: '5',
    date: '2024-06-09',
    description: 'Gym Membership',
    amount: '-$25.00',
    total: '$25.00',
    tipPercent: '0%',
    splitType: 'Even',
    people: [{ name: 'Frank', paid: true, amountPaid: '$25.00' }]
  },
];

export default function PastTransactionsScreen() {
  const [expandedTransaction, setExpandedTransaction] = useState(null);

  const handlePress = (id:any) => {
    setExpandedTransaction(expandedTransaction === id ? null : id);
  };

  const renderTransactionDetails = (item:any) => {
    if (expandedTransaction === item.id) {
      return (
        <View style={styles.transactionDetails}>
          <Text>Total: {item.total}</Text>
          <Text>Tip Percent: {item.tipPercent}</Text>
          <Text>Number of People: {item.people.length}</Text>
          <Text>Split Type: {item.splitType}</Text>
          <Text style={styles.peopleHeader}>People involved:</Text>
          <View style={styles.peopleList}>
            {item.people.map((person:any, index:any) => (
              <Text key={index} style={styles.person}>
                {person.name} - {person.paid ? 'Paid' : 'Not Paid'} - {person.amountPaid}
              </Text>
            ))}
          </View>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Past Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.id)} style={styles.transactionItem}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.amount}>{item.amount}</Text>
            {renderTransactionDetails(item)}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 80,
    backgroundColor: '#F3EBE4',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  transactionItem: {
    backgroundColor: '#BEB2A0',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  date: {
    fontSize: 16,
    color: '#555555',
  },
  description: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 4,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  transactionDetails: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  peopleHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  peopleList: {
    marginTop: 8,
  },
  person: {
    fontSize: 16,
    marginVertical: 2,
  },
});
