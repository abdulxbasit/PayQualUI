import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput, Button} from 'react-native-paper';
export default function UpdateUpi({refRBSheet}) {
  return (
    <RBSheet
      height={520}
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        container: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        },
        wrapper: {
          backgroundColor: '#1E1F20',
          opacity: 0.86,
        },
        draggableIcon: {
          marginTop: 16,
          height: 6,
          width: 40,
          backgroundColor: '#787979',
        },
      }}>
      <UpdateUpiScreen />
    </RBSheet>
  );
}
function UpdateUpiScreen() {
  return (
    <View style={styles.mainview}>
      <View style={styles.iconview}>
        <Icon name="close" size={30} color="#1E1F20" />
      </View>
      <Text style={styles.title}>Update UPI ID</Text>
      <Text style={styles.subtitle}>
      You may enter a valid UPI ID/VPA from any merchant like PhonePe, GPay, PayTM etc.
      </Text>
      <View style={styles.textinputview}>
        <Text style={styles.textinputinfo}>
        Enter UPI ID/VPA
        </Text>
        <TextInput
          mode="outlined"
          outlineColor="#F9F9F9"
          activeOutlineColor="#1E1F20"
          right={<TextInput.Icon name="refresh" />}
          style={styles.textinput}
        />
      </View>
      <View style={styles.textinputview}>
        <Text style={styles.textinputinfo}>
        Your banking Name
        </Text>
        <TextInput
          placeholderTextColor={'#C6C6C6'}
          placeholder='ENTER UPI ID FIRST'
          mode="outlined"
          outlineColor="#F9F9F9"
          activeOutlineColor="#1E1F20"
          right={<TextInput.Icon name="refresh" />}
          style={styles.textinput}
        />
      </View>
      <Button
        contentStyle={styles.buttonContentStyle}
        style={styles.button}
        mode="contained-tonal"
        onPress={() => console.log('Pressed')}>
        <Text style={styles.buttontext}>Verify Now</Text>
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  mainview: {
    flex: 1,
  },
  iconview: {
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 32,
  },
  title: {
    fontFamily: 'AEH',
    fontSize: 32,
    marginTop: 30,
    marginLeft: 32,
    color: '#1E1F20',
  },
  subtitle: {
    fontFamily: 'Avenir-Medium',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 20,
    marginLeft: 32,
    color: '#787979',
  },
  textinputinfo: {
    fontFamily: 'Avenir-Medium',
    fontSize: 12,
    fontWeight: '800',
    color: '#787979',
    marginBottom: 5,
    textTransform: 'uppercase'
  },
  textinput: {
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
    fontWeight: '500',
    color:'#F0F0F0'
  },
  textinputview: {
    marginTop: 30,
    marginHorizontal: 32,
  },
  button: {
    marginHorizontal: 32,
    borderRadius: 12,
    marginTop: 30,
    backgroundColor: '#FFCA62',
  },
  buttontext: {
    color: '#1E1F20',
    fontFamily: 'AEH',
    fontSize: 16,
  },
  buttonContentStyle: {
    height: 50,
  },
});