import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'RestaurantMobileApp.db' });

const AddNew = ({ navigation }) => {
  let [resName, setResName] = useState('');
  let [resContact, setResContact] = useState('');
  let [resAddress, setResAddress] = useState('');

  let addNewRes = () => {
    console.log(resName, resContact, resAddress);

    if (!resName) {
      alert('Please fill Restaurant Name');
      return;
    }
    if (!resContact) {
      alert('Please fill Contact Number');
      return;
    }
    if (!resAddress) {
      alert('Please fill Address');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO restaurant_table (res_name, res_contact, res_address) VALUES (?,?,?)',
        [resName, resContact, resAddress],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'Add New Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Add New Failed');
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <TextInput
                placeholder="Restaurant Name"
                onChangeText={(resName) => setResName(resName)}
                style={{ padding: 10 }}
              />
              <TextInput
                placeholder="Date"
                onChangeText={(resContact) => setResContact(resContact)}
                maxLength={10}
                keyboardType="numeric"
                style={{ padding: 10 }}
              />
              <TextInput
                placeholder="Enter Address"
                onChangeText={(resAddress) => setResAddress(resAddress)}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Button title="Submit" onHandleClick={addNewRes} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNew;