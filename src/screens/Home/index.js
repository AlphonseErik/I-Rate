import React, { useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import { openDatabase } from 'react-native-sqlite-storage';

let db = openDatabase({ name: 'RestaurantMobileApp.db' });

const Home = ({ navigation }) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
                <Text text="Restaurant Mobile App" />
                <Button
                    title="Add New"
                    onHandleClick={() => navigation.navigate('AddNew')}
                />
                <Button
                    title="Edit"
                    onHandleClick={() => navigation.navigate('Edit')}
                />
                <Button
                    title="View"
                    onHandleClick={() => navigation.navigate('View')}
                />
                <Button
                    title="View All"
                    onHandleClick={() => navigation.navigate('ViewAll')}
                />
                <Button
                    title="Delete"
                    onHandleClick={() => navigation.navigate('Delete')}
                />
            </View>
        </View>
    </SafeAreaView>
  );
};

export default Home;