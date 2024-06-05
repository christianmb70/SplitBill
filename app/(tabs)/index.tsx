import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button,TextInput, Keyboard, TouchableOpacity} from 'react-native';

export default function HomeScreen() {
  const [text, onChangeText] = React.useState('');
  const [Total, onChangeTotal] = React.useState('');
  const [People, onChangePeople] = React.useState('');
  const [activeButton, setActiveButton] = React.useState(null);

  const handleDonePress = () => {
    Keyboard.dismiss();
  }; 

  // const handleButtonPress = (percentage : any) => {
  //   onChangeTotal((Number(Total) + Number(Total) * percentage).toFixed(2));
  //   setActiveButton(percentage);
  // };

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
          placeholder='Title'
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

      <View style={styles.button1}>
        <Button
          title="Custom"
          color="Black"
        />
      </View>
      <View style={styles.button2}>
        <Button
          title="Submit"
          color="black"/>
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
    row:{
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
      width: 100,
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
    button1: {
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 10,
      backgroundColor: 'rgba(190, 178, 160, 1)',
      alignContent: "center"
    },
    button2: {
      marginTop: 80,
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 10,
      backgroundColor: 'rgba(183, 203, 191, 1)',
    }, 
});
