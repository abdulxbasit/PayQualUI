import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput, Button} from 'react-native-paper';
export default function PayVia({refRBSheet}) {
  return (
    <RBSheet
      height={380}
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
      <PayViaScreen />
    </RBSheet>
  );
}
function PayViaScreen() {
  return (
    <View style={styles.mainview}>
      <View style={styles.iconview}>
        <Icon name="close" size={30} color="#1E1F20" />
      </View>
      <Text style={styles.title}>Pay via PhonePe</Text>
      <Text style={styles.subtitle}>
      ENTER UPI ID of CORA DAVISON
      </Text>
      <View style={styles.textinputview}>
        <TextInput
          placeholderTextColor={'#C6C6C6'}
          placeholder='Enter Cora’s UPI ID'
          mode="outlined"
          outlineColor="#F9F9F9"
          activeOutlineColor="#1E1F20"
          style={styles.textinput}
        />
        <Icon name='qrcode-scan' size={34} color={'#1E1F20'}/>
        
      </View>
      <Text style={styles.textinputinfo}>
       Supports all UPI apps like GPay, Paytm etc.
      </Text>
      <Button
        contentStyle={styles.buttonContentStyle}
        style={styles.button}
        mode="contained-tonal"
        onPress={() => console.log('Pressed')}>
        <Text style={styles.buttontext}>Confirm and Pay</Text>
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
    marginLeft: 32,
    marginTop:30,
    color: '#787979',
  },
  textinputinfo: {
    fontFamily: 'Avenir-Medium',
    fontSize: 14,
    fontWeight: '600',
    color: '#787979',
    marginHorizontal: 32,
    marginTop:5
  },
  textinput: {
    fontFamily: 'AEH',
    fontSize: 16,
    fontWeight: '600',
    width:'85%'
  },
  textinputview: {
    marginHorizontal: 32,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
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
