import React, {useRef} from 'react';
import {View, Button} from 'react-native';
import VerifyPhone from './src/Rbsheets/VerifyPhone';
import UpdateEmail from './src/Rbsheets/UpdateEmail';
import ChangePassword from './src/Rbsheets/ChangePassword';
import UpdateUpi from './src/Rbsheets/UpdateUpi';
import SortBy from './src/Rbsheets/SortBy';
import PayVia from './src/Rbsheets/PayVia';
import CreateCategory from './src/Rbsheets/CreateCategory';
import CreateGroup from './src/Rbsheets/CreateGroup';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
export default function App() {
  const refRBSheet1 = useRef();
  const refRBSheet2 = useRef();
  const refRBSheet3 = useRef();
  const refRBSheet4 = useRef();
  const refRBSheet5 = useRef();
  const refRBSheet6 = useRef();
  const refRBSheet7 = useRef();
  const refRBSheet8 = useRef();
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
      }}>
      <Button
        title="Verify Phone"
        onPress={() => {refRBSheet1.current.open()}}
      />
      <Button
        title="Update Email"
        onPress={() => {refRBSheet2.current.open()}}
      />
      <Button
        title="Change Password"
        onPress={() => {refRBSheet3.current.open()}}
      />
      <Button
        title="Update Upi"
        onPress={() => {refRBSheet4.current.open()}}
      />
      <Button
        title="Sort By"
        onPress={() => {refRBSheet5.current.open()}}
      />
      <Button
        title="Pay Via"
        onPress={() => {refRBSheet6.current.open()}}
      />
      <Button
        title="Create Category"
        onPress={() => {refRBSheet7.current.open()}}
      />
      <Button
        title="Create Group"
        onPress={() => {refRBSheet8.current.open()}}
      />
      <VerifyPhone refRBSheet={refRBSheet1}/>  
      <UpdateEmail refRBSheet={refRBSheet2}/> 
      <ChangePassword refRBSheet={refRBSheet3}/>
      <UpdateUpi refRBSheet={refRBSheet4}/>
      <SortBy refRBSheet={refRBSheet5}/>
      <PayVia refRBSheet={refRBSheet6}/>
      <CreateCategory refRBSheet={refRBSheet7}/>
      <CreateGroup refRBSheet={refRBSheet8}/>
    </View>
    </ApplicationProvider>
  );
}
