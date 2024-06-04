import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  // const navigation = useNavigation();
  // const handlePress = () => {
  //   navigation.navigate("past_transactions"); 
  // };

  return (
    <View style={styles.container}> 
      <View>
        <Text style={styles.Profile}>Profile</Text>
      </View>
      <View>
        <Image style={{
            width: '100%',
            height: 300
          }} source={require('../../assets/images/robert.jpg')}></Image>
      </View>
      <View style={styles.Profile}>
        <Text>John Smith</Text>
      </View>
      <View style={styles.button1}>
        <Button
          title="Past Transactions"
          color="Black"
          // onPress={() => {
          //     props.navigation.navigate("past_transactions");
          // }}
        />
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
    Profile: {
      textAlign: 'center',
      fontFamily: 'Inter',
      fontSize: 50,
      fontStyle: 'normal',
      fontWeight: '700',
      padding: 20
    },
    button1: {
      borderRadius: 10,
      backgroundColor: 'rgba(190, 178, 160, 1)',
    }, 
}); 
