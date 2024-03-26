/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
const myColumnNames = ['firstName', 'lastName', 'Email', 'phone'];

const CustomMapDialog = ({mapObj, index}) => {
  const [selected, setSelected] = useState('');
  const selectItem = item => {
    setSelected(item);
  };
  const mapObject = item => {
    mapObj[index] = item;
    setSelected(item);
  };
  return (
    <Menu>
      <MenuTrigger
        text={selected || 'Please select'}
        style={{
          padding: 10,
          borderWidth: 1,
          alignSelf: 'flex-end',
        }}
      />
      <MenuOptions>
        {myColumnNames.map((item, index) => {
          return (
            <MenuOption
              key={index}
              onSelect={() => {
                mapObject(item);
              }}>
              <Text key={index}>{item}</Text>
            </MenuOption>
          );
        })}
      </MenuOptions>
    </Menu>
  );
};
export default CustomMapDialog;
