import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {TextInput, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Layout, Toggle } from '@ui-kitten/components';
const useToggleState = (initialState = false) => {
    const [checked, setChecked] = React.useState(initialState);
  
    const onCheckedChange = (isChecked) => {
      setChecked(isChecked);
    };
  
    return { checked, onChange: onCheckedChange };
  };
export default function CreateGroup({refRBSheet}) {
  
  return (
    <RBSheet
      height={570}
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        container: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: '#F9F9F9',
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
      <CreateGroupScreen />
    </RBSheet>
  );
}
function CreateGroupScreen() {
const successToggleState = useToggleState();
  return (
    <View style={styles.mainview}>
      <View style={styles.iconview}>
        <Icon name="close" size={30} color="#1E1F20" />
      </View>
      <Text style={styles.title}>Create Group</Text>
      <View style={styles.textinputinfo}>
      <Text style={styles.affixtext}>
      Group Name
      </Text>
      <Text><TextInput.Affix text="0/20" /></Text>
      </View>
      <View style={styles.textinputview}>
        <TextInput
          mode="outlined"
          outlineColor="#F9F9F9"
          activeOutlineColor="#1E1F20"
          style={styles.textinput}
        />
        
      </View>
      <View style={styles.settlementview}>
      <Text style={styles.settlementtext}>Enable settlement cycle</Text>
      <Toggle
        status='success'
        {...successToggleState}>
      </Toggle>
      </View>
      <Text style={styles.groupinputinfo}>
      Set due dates for settling up the group
      </Text>
      <Button
        contentStyle={styles.buttonContentStyle}
        style={styles.button}
        mode="contained-tonal"
        onPress={() => console.log('Pressed')}>
        <Text style={styles.buttontext}>Create Group</Text>
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
    fontSize: 34,
    marginTop: 40,
    marginLeft: 32,
    color: '#1E1F20',
  },
  textinputinfo:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:30,
    marginHorizontal:32,
  },
  affixtext:{
    fontFamily: 'Avenir-Medium',
    fontSize: 14,
    fontWeight: '600',
    color: '#1E1F20',
    textTransform:'uppercase'
  },
  button: {
    marginHorizontal: 32,
    borderRadius: 12,
    marginTop: 130,
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
  textinput: {
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
    fontWeight: '500',
  },
  textinputview: {
    marginHorizontal: 32,
  },
  settlementview: {
    justifyContent:'space-between',
    flexDirection:'row',
    marginHorizontal: 32,
    alignItems:"center",
    marginTop:20,
  },
  settlementtext:{
    color: '#1E1F20',
    fontFamily: 'AEH',
    fontSize: 18,
  },
  groupinputinfo:{
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
    fontWeight: '600',
    color: '#787979',
    marginHorizontal:32,

  },
});