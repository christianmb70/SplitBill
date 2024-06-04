import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, Button, StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}> 
      <View>
        <Text style={styles.profile}>Settings</Text>
      </View>
      <View style={styles.row}>
        <Image style={{
            width: 50,
            height: 50,
            borderRadius: 50,
          }} 
          source={require('../../assets/images/profile.webp')}/>
        <Text style={styles.text}>Profile</Text>
      </View>
      <View style={styles.row}>
        <Text>Payment Methods</Text>
      </View>
      <View style={styles.row}>
        <Text>Privacy</Text>
      </View>
      <View style={styles.row}>
        <Text>Notifications</Text>
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
      paddingTop: 5,
      paddingBottom: 6,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: 3,
    },
    profile: {
      textAlign: 'center',
      fontFamily: 'Inter',
      fontSize: 50,
      fontStyle: 'normal',
      fontWeight: '700',
      padding: 20
    },
    text: {
      textAlign: 'center',
      fontFamily: 'Inter',
      fontSize: 30,
      fontStyle: 'normal',
      fontWeight: '700',
      padding: 20
    },
    button1: {
      borderRadius: 10,
      backgroundColor: 'rgba(190, 178, 160, 1)',
    }, 
}); 
