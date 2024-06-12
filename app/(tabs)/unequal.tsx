import React, { useState } from 'react';
import { StyleSheet, Platform, SafeAreaView, Text, View, Button, TextInput, Keyboard, TouchableOpacity, ScrollView } from 'react-native';


interface Entry {
    name: string;
    cost: string;
    phone: string;
  }
  
  export default function HomeScreen() {
    const [entries, setEntries] = useState<Entry[]>([{ name: '', cost: '', phone: '' }]);
  
    const handleInputChange = (index: number, field: keyof Entry, value: string) => {
        const newEntries = [...entries];
        newEntries[index][field] = value;
        setEntries(newEntries);
      };

  const addEntry = () => {
    setEntries([...entries, { name: '', cost: '', phone: '' }]);
  };

  const removeEntry = (index:any) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
  };

  const handleDonePress = () => {
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    console.log('Submitted data:', entries);
    // You can handle the form submission logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>        Customize </Text>
        {entries.map((entry, index) => (
          <View key={index} style={styles.row}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange(index, 'name', text)}
              placeholder=" Name"
              value={entry.name}
              returnKeyType="done"
              onSubmitEditing={handleDonePress}
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange(index, 'cost', text)}
              placeholder="Cost"
              value={entry.cost}
              keyboardType="numeric"
              returnKeyType="done"
              onSubmitEditing={handleDonePress}
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange(index, 'phone', text)}
              placeholder="Phone #"
              value={entry.phone}
              keyboardType="phone-pad"
              returnKeyType="done"
              onSubmitEditing={handleDonePress}
            />
            <TouchableOpacity
              style={styles.removeBtn}
              onPress={() => removeEntry(index)}
            >
              <Text style={styles.btnText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
        <Button title="Add Friend" onPress={addEntry} color= "#8b6c5c" />
        <View style={styles.submitButton}>
          <Button title="Submit" onPress={handleSubmit} color="black" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3EBE4',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 80,
    margin: 8,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: 'rgba(190, 178, 160, 1)',
  },
  removeBtn: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
  },
  submitButton: {
    marginTop: 20,
  },
});
