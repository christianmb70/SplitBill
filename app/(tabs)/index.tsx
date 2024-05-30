import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.container}> 
      <Text>Title:</Text>
      <Text>What was your total?</Text>
      <Text>How many people</Text>
      <Text>Did you leave a Tip?</Text>

      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.button1}>
            <Button
              title="5%"
              color="Black"
            />
          </View>
        </View>
        <View style={styles.button1}>
          <Button
            title="10%"
            color="Black"
          />
        </View>
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
      borderRadius: 10,
    },
    column: {
      flexDirection: 'column',
    },
    Profile: {
      textAlign: 'center',
      fontFamily: 'Inter',
      fontSize: 50,
      fontStyle: 'normal',
      fontWeight: '700',
      padding: 20
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
