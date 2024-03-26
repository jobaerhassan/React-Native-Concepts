/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Papa from 'papaparse';
import React, {useEffect, useState} from 'react';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
const myColumnNames = ['firstName', 'lastName', 'Email', 'phone'];

const MapCSV = ({route}) => {
  const {parsedData} = route.params;
  const [selectedCol, setSelectedCol] = useState('Select Column Name');
  const selectItem = item => {
    setSelectedCol(item);
  };
  // const handleManipulatedData = () => {
  //   Papa.parse(parsedData, {
  //     download: true,
  //     delimiter: '\t',
  //     complete: function (results) {
  //       console.log(results);
  //     },
  //   });
  // };
  useEffect(() => {
    // handleManipulatedData();
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{padding: 20}}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            color: 'black',
          }}>
          Map CSV Data
        </Text>
        {parsedData &&
          parsedData.map(item => {
            const tempArr = item.split(',');
            return (
              <View>
                {tempArr.map(text => {
                  return <Text>{text}</Text>;
                })}
                <MappingDialog
                  selectItem={selectItem}
                  selectedCol={selectedCol}
                />
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};
export default MapCSV;
const MappingDialog = ({selectedCol, selectItem}) => {
  return (
    <Menu>
      <MenuTrigger
        text={selectedCol}
        style={{padding: 10, borderWidth: 1, alignSelf: 'flex-end'}}
      />
      <MenuOptions>
        {myColumnNames.map(item => {
          return (
            <MenuOption
              onSelect={() => {
                selectItem(item);
              }}>
              <Text>{item}</Text>
            </MenuOption>
          );
        })}
      </MenuOptions>
    </Menu>
  );
};
const styles = StyleSheet.create({
  container: {},
});

// User
// ["id,first_name,last_name,email,gender,ip_address", "1,Romeo,Purcer,rpurcer0@china.com.cn,Male,229.176.6.223", "2,Mavra,Shurlock,mshurlock1@myspace.com,Female,187.178.75.162", "3,Nathanil,Wittke,nwittke2@amazonaws.com,Male,166.247.100.244", "4,Carey,Robinette,crobinette3@house.gov,Male,235.186.61.59"]
