import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal, TouchableOpacity, Keyboard } from 'react-native';

export default function HomeScreen({ navigation }: { navigation: any }) {
  const [text, onChangeText] = useState('');
  const [Total, onChangeTotal] = useState('');
  const [People, onChangePeople] = useState('');
  const [activeButton, setActiveButton] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [newButtonText, setNewButtonText] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleDonePress = () => {
    Keyboard.dismiss();
  };

  const handleOpenModal = () => {
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  const handleSave = () => {
    setNewButtonText(inputValue);
    setIsVisible(false);
  };

  const changeActiveButton = (percentage: any) => {
    setActiveButton(percentage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Title:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Title"
          value={text}
          returnKeyType="done"
          onSubmitEditing={handleDonePress}
        />
      </View>
      <Text style={styles.text}>What was your Total?</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTotal}
        value={Total}
        placeholder="0"
        keyboardType="numeric"
        returnKeyType="done"
        onSubmitEditing={handleDonePress}
      />
      <Text style={styles.text}>How many people</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePeople}
        value={People}
        placeholder="0"
        keyboardType="numeric"
        returnKeyType="done"
        onSubmitEditing={handleDonePress}
      />
      <Text style={styles.text}>Did you leave a Tip?</Text>

      <View style={styles.row}>
        <View>
          <TouchableOpacity
            style={[styles.touch, activeButton === 0.05 && styles.active]}
            onPress={() => changeActiveButton(0.05)}
          >
            <View style={styles.textContainer}>
              <Text>5%</Text>
              <Text>{(Number(Total) * 0.05).toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.touch, activeButton === 0.10 && styles.active]}
            onPress={() => changeActiveButton(0.10)}
          >
            <View style={styles.textContainer}>
              <Text>10%</Text>
              <Text>{(Number(Total) * 0.10).toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <TouchableOpacity
            style={[styles.touch, activeButton === 0.15 && styles.active]}
            onPress={() => changeActiveButton(0.15)}
          >
            <View style={styles.textContainer}>
              <Text>15%</Text>
              <Text>{(Number(Total) * 0.15).toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.touch, activeButton === 0.20 && styles.active]}
            onPress={() => changeActiveButton(0.20)}
          >
            <View style={styles.textContainer}>
              <Text>20%</Text>
              <Text>{(Number(Total) * 0.20).toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <Button title={newButtonText ? newButtonText : "Custom" }  onPress={handleOpenModal}  color="pink"/>
      </View>

      <Modal visible={isVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              onChangeText={setInputValue}
              placeholder="Enter Desired Tip Amount"
              value={inputValue}
            />
            <View style={styles.modalButtons}>
              <Button title="Save" onPress={handleSave} color="pink"/>
              <Button title="Cancel" onPress={handleCloseModal}  color="pink"/>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.button2}>
        <Button title="Submit" color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3EBE4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    width: 134,
    paddingTop: 5,
    paddingBottom: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 3,
    columnGap: 3,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: 'rgba(190, 178, 160, 1)',
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  touch: {
    width: 70,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(190, 178, 160, 1)',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: 'rgba(183, 203, 191, 1)',
  },
  button2: {
    marginTop: 80,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(183, 203, 191, 1)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});
