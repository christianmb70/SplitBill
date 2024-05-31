import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button,TextInput} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [text, onChangeText] = React.useState('');
  const [Total, onChangeTotal] = React.useState('');
  const [People, onChangePeople] = React.useState('');

  return (
    <View style={styles.container}> 
      <View style={styles.row}>
        <Text style={styles.text}>Title:</Text>
        <TextInput 
          style={styles.input}
          onChangeText={onChangeText}
          placeholder='Title'
          value={text}
        />
      </View>
      <Text style={styles.text}>What was your Total?</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTotal}
        value={Total}
        placeholder="10.00"
        keyboardType="numeric"
      />
      <Text style={styles.text}>How many people</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePeople}
        value={People}
        placeholder="10.00"
        keyboardType="numeric"
      />
      <Text style={styles.text}>Did you leave a Tip?</Text>
      
      <View style={styles.row}>
        <View style={styles.button1}>
          <Button
            title="5%"
            color="Black"
          />
        </View>
        <View style={styles.button1}>
          <Button
            title="10%"
            color="Black"
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.button1}>
          <Button
            title="15%"
            color="Black"
          />
        </View>
        <View style={styles.button1}>
          <Button
            title="20%"
            color="Black"
          />
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
    button1: {
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 10,
      backgroundColor: 'rgba(190, 178, 160, 1)',
    },
    button2: {
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 10,
      backgroundColor: 'rgba(183, 203, 191, 1)',
    }, 
});
