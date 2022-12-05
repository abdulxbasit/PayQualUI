import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {TextInput, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
export default function CreateCategory({refRBSheet}) {
  return (
    <RBSheet
      height={500}
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
      <CreateCategoryScreen />
    </RBSheet>
  );
}
function CreateCategoryScreen() {
  return (
    <View style={styles.mainview}>
      <View style={styles.iconview}>
        <Icon name="close" size={30} color="#1E1F20" />
      </View>
      <Text style={styles.title}>Create Category</Text>
      <View style={styles.textinputinfo}>
      <Text style={styles.affixtext}>
      Category Name
      </Text>
      <Text><TextInput.Affix text="0/15" /></Text>
      </View>
      <View style={styles.textinputview}>
        <TextInput
          mode="outlined"
          outlineColor="#F9F9F9"
          activeOutlineColor="#1E1F20"
          right={<TextInput.Icon name="tag" />}
          style={styles.textinput}
        />
        <Text style={styles.categoryinputinfo}>
        Category will be added to this expense/group.
      </Text>
      </View>
      <Button
        contentStyle={styles.buttonContentStyle}
        style={styles.button}
        mode="contained-tonal"
        onPress={() => console.log('Pressed')}>
        <Text style={styles.buttontext}>Create Category</Text>
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
    marginTop: 30,
    marginLeft: 32,
    color: '#1E1F20',
  },
  textinputinfo:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:30,
    marginHorizontal:32,
  },
  categoryinputinfo:{
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
    fontWeight: '600',
    color: '#787979',
    marginTop:7
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
});