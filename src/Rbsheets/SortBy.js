import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
export default function SortBy({refRBSheet}) {
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
      <SortByScreen />
    </RBSheet>
  );
}
function SortByScreen() {
  return (
    <View style={styles.mainview}>
      <View style={styles.iconview}>
        <Icon name="close" size={30} color="#1E1F20" />
      </View>
      <Text style={styles.title}>Sort By</Text>
      <View style={styles.checkboxview}>
      <Text style={styles.checkboxtext}>
      New Friends First
      </Text>
      
      </View>
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
  checkboxview:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:16,
    marginHorizontal:32,
  },
  checkboxtext:{
    fontFamily: 'Avenir-Medium',
    fontSize: 14,
    fontWeight: '600',
    color: '#1E1F20',
  }

});