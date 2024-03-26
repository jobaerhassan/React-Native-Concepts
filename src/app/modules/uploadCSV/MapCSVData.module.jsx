/* eslint-disable react-native/no-inline-styles */
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomMapDialog from './CustomMapDialog';

const MapCSV = ({route}) => {
  const {parsedData} = route.params;
  const [mapData, setMapData] = useState({});
  const mapObj = {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          padding: 20,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            color: 'black',
            paddingBottom: 20,
          }}>
          Map CSV Data
        </Text>
        {parsedData &&
          parsedData.map((item, index) => {
            return (
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  overflow: 'hidden',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    gap: 5,
                    paddingBottom: 20,
                    borderBottomWidth: 1,
                    flex: 1,
                  }}>
                  {item.map(text => {
                    return <Text>{text}</Text>;
                  })}
                </View>

                <CustomMapDialog mapObj={mapObj} index={index} />
              </View>
            );
          })}
        <Button
          title="Press"
          style={{padding: 20}}
          onPress={() => {
            console.log(mapObj);
          }}
        />
      </View>
    </ScrollView>
  );
};
export default MapCSV;

const styles = StyleSheet.create({
  container: {},
});
